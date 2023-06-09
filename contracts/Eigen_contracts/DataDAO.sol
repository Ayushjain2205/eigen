// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "../BucketApp.sol";
import "../ObjectApp.sol";
import "../GroupApp.sol";
import "../interface/IERC1155.sol";
import "../interface/IERC721Nontransferable.sol";
import "../interface/IERC1155Nontransferable.sol";

contract DataDAO is BucketApp, ObjectApp, GroupApp, VRFConsumerBase {
    // Chainlink VRF variables
    bytes32 private keyHash;
    uint256 private fee;
    bytes32 private requestId;

    // admins
    address public admin;
    mapping(address => bool) public members;

    // ERC1155 token for contribution
    address public dataDAOToken;

    // system contract
    address public bucketToken;
    address public objectToken;
    address public groupToken;
    address public memberToken;

    // tokenId => DAOName name
    mapping(uint256 => string) public DAOName;
    // series name => tokenId
    mapping(string => uint256) public DAOid;

    // tokenId => imageName name
    mapping(uint256 => string) public imageName;
    // Contribution name => tokenId
    mapping(string => uint256) public contributionId;
    // contributionId => reward
    mapping(uint256 => uint256) public contributionReward;

    uint256 public royalty;
    mapping(address => uint256) public income;

    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    modifier onlyOwner() {
        require(msg.sender == admin, "caller is not the admin");
        _;
    }

    modifier onlyOperator() {
        require(
            msg.sender == admin || _isOperator(msg.sender),
            "caller is not the admin or operator"
        );
        _;
    }

    constructor(
        address _crossChain,
        address _bucketHub,
        address _objectHub,
        address _groupHub,
        address _paymentAddress,
        uint256 _callbackGasLimit,
        address _refundAddress,
        uint8 _failureHandleStrategy,
        address _owner,
        address _dataDAOToken,
        uint256 _royalty,
        address _vrfCoordinator,
        address _linkToken,
        bytes32 _keyHash,
        uint256 _fee
    )
        VRFConsumerBase(_vrfCoordinator, _linkToken)
        BucketApp(_bucketHub, _paymentAddress)
        ObjectApp(_objectHub)
        GroupApp(_groupHub)
    {
        require(_owner != address(0), "DataDAO: Invalid owner address");
        _transferOwnership(_owner);

        royalty = _royalty;
        dataDAOToken = _dataDAOToken;
        bucketToken = IBucketHub(_bucketHub).ERC721Token();
        objectToken = IObjectHub(_objectHub).ERC721Token();
        groupToken = IGroupHub(_groupHub).ERC721Token();
        memberToken = IGroupHub(_groupHub).ERC1155Token();

        keyHash = _keyHash;
        fee = _fee;

        __base_app_init_unchained(
            _crossChain,
            _callbackGasLimit,
            _refundAddress,
            _failureHandleStrategy
        );
        __bucket_app_init_unchained(_bucketHub, _paymentAddress);
        __group_app_init_unchained(_groupHub);
        __object_app_init_unchained(_objectHub);
    }

    /*----------------- external functions -----------------*/
    function greenfieldCall(
        uint32 status,
        uint8 resoureceType,
        uint8 operationType,
        uint256 resourceId,
        bytes calldata callbackData
    ) external override(BucketApp, ObjectApp, GroupApp) {
        require(msg.sender == crossChain, "DataDAO: Invalid caller");

        if (resoureceType == RESOURCE_BUCKET) {
            _bucketGreenfieldCall(
                status,
                operationType,
                resourceId,
                callbackData
            );
        } else if (resoureceType == RESOURCE_OBJECT) {
            _objectGreenfieldCall(
                status,
                operationType,
                resourceId,
                callbackData
            );
        } else if (resoureceType == RESOURCE_GROUP) {
            _groupGreenfieldCall(
                status,
                operationType,
                resourceId,
                callbackData
            );
        } else {
            revert("DataDAO: Invalid resource type");
        }
    }

    /**
     * @dev Create a new series.
     *
     * Assuming the sp provider's info will be provided by the front-end.
     */
    function createSeries(
        string calldata name,
        BucketStorage.BucketVisibilityType visibility,
        uint64 chargedReadQuota,
        address spAddress,
        uint256 expireHeight,
        bytes calldata sig
    ) external payable {
        require(bytes(name).length > 0, "DataDAO: Invalid name");
        require(DAOid[name] == 0, "DataDAO: Series already exists");

        bytes memory _callbackData = bytes(name); // use name as callback data
        _createBucket(
            msg.sender,
            name,
            visibility,
            chargedReadQuota,
            spAddress,
            expireHeight,
            sig,
            _callbackData
        );
    }

    /**
     * @dev Provide an Contribution's ID to create a group for it.
     */
    function createGroup(uint256 _DAOid) public payable {
        require(
            IERC721NonTransferable(objectToken).ownerOf(_DAOid) == msg.sender,
            "DataDAO: Invalid caller"
        );

        string memory name = string.concat("Group for ", imageName[_DAOid]);
        require(groupId[name] == 0, "DataDAO: Group already exists");

        bytes memory _callbackData = bytes(name); // use name as callback data
        _createGroup(msg.sender, name, _callbackData);
    }

    /**
     * @dev Provide an Contribution's ID to publish it.
     *
     * An ERC1155 token will be minted to the admin.
     * Other users can buy the Contribution by calling `buyEbook` function with given price.
     */
    function publishEbook(uint256 _DAOid, uint256 price) external {
        require(
            IERC721NonTransferable(objectToken).ownerOf(_DAOid) == msg.sender,
            "DataDAO: Invalid caller"
        );
        require(
            contributionGroup[_DAOid] != 0,
            "DataDAO: Group does not exist"
        );
        require(price > 0, "DataDAO: Invalid price");

        contributionReward[_DAOid] = price;
        IERC1155(dataDAOToken).mint(msg.sender, _DAOid, 1, "");
    }

    /**
     * @dev Provide an Contribution's ID to buy it.
     *
     * Buyer will be added to the group of the Contribution.
     * An ERC1155 token will be minted to the buyer.
     */
    function buyEbook(uint256 _DAOid) external payable {
        require(
            contributionReward[_DAOid] > 0,
            "DataDAO: Ebook not available for purchase"
        );

        uint256 price = contributionReward[_DAOid];
        require(msg.value >= price, "DataDAO: Insufficient payment");

        IERC1155(dataDAOToken).mint(msg.sender, _DAOid, 1, "");

        uint256 _groupId = contributionGroup[_DAOid];
        address _owner = IERC721NonTransferable(groupToken).ownerOf(_groupId);
        address[] memory _member = new address[](1);
        _member[0] = msg.sender;
        _updateGroup(_owner, _groupId, UPDATE_ADD, _member);

        uint256 _income = (price * (100 - royalty)) / 100;
        income[_owner] += _income;
    }

    /**
     * @dev Provide an Contribution's ID to downshelf it.
     *
     * The Contribution will be removed from the shelf and cannot be bought.
     * Those who have already purchased are not affected.
     */
    function downshelfEbook(uint256 _DAOid) external {
        require(
            IERC721NonTransferable(objectToken).ownerOf(_DAOid) == msg.sender,
            "DataDAO: Invalid caller"
        );
        require(contributionReward[_DAOid] > 0, "DataDAO: Ebook not on shelf");

        contributionReward[_DAOid] = 0;
    }

    /**
     * @dev Register bucket resource that mirrored from GreenField to BSC.
     */
    function registerSeries(string calldata name, uint256 tokenId) external {
        require(
            IERC721NonTransferable(bucketToken).ownerOf(tokenId) == msg.sender,
            "DataDAO: Invalid caller"
        );
        require(bytes(name).length > 0, "DataDAO: Invalid name");
        require(DAOid[name] == 0, "DataDAO: Series already exists");

        DAOName[tokenId] = name;
        DAOid[name] = tokenId;
    }

    /**
     * @dev Register object resource that mirrored from GreenField to BSC.
     */
    function registerEbook(
        string calldata _ebookName,
        uint256 _DAOid,
        string calldata _groupName,
        uint256 _groupId
    ) external {
        require(
            IERC721NonTransferable(objectToken).ownerOf(_DAOid) == msg.sender,
            "DataDAO: Invalid caller"
        );
        require(bytes(_ebookName).length > 0, "DataDAO: Invalid name");
        require(
            contributionId[_ebookName] == 0,
            "DataDAO: Ebook already exists"
        );

        imageName[_DAOid] = _ebookName;
        contributionId[_ebookName] = _DAOid;

        if (_groupId != 0) {
            require(
                IERC721NonTransferable(groupToken).ownerOf(_groupId) ==
                    msg.sender,
                "DataDAO: Invalid caller"
            );
            require(bytes(_groupName).length > 0, "DataDAO: Invalid name");

            groupName[_groupId] = _groupName;
            groupId[_groupName] = _groupId;

            groupEbook[_groupId] = _DAOid;
            contributionGroup[_DAOid] = _groupId;
        }
    }

    /**
     * @dev Register group resource that mirrored from GreenField to BSC.
     */
    function registerGroup(string calldata name, uint256 tokenId) external {
        require(
            IERC721NonTransferable(groupToken).ownerOf(tokenId) == msg.sender,
            "DataDAO: Invalid caller"
        );
        require(bytes(name).length > 0, "DataDAO: Invalid name");
        require(groupId[name] == 0, "DataDAO: Group already exists");

        groupName[tokenId] = name;
        groupId[name] = tokenId;
    }

    /*----------------- admin functions -----------------*/
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "DataDAO: Invalid caller");
        _transferOwnership(newOwner);
    }

    function addOperator(address newOperator) public onlyOwner {
        members[newOperator] = true;
    }

    function removeOperator(address operator) public onlyOwner {
        delete members[operator];
    }

    function retryPackage(uint8 resoureceType) external override onlyOperator {
        if (resoureceType == RESOURCE_BUCKET) {
            _retryBucketPackage();
        } else if (resoureceType == RESOURCE_OBJECT) {
            _retryObjectPackage();
        } else if (resoureceType == RESOURCE_GROUP) {
            _retryGroupPackage();
        } else {
            revert("DataDAO: Invalid resource type");
        }
    }

    function skipPackage(uint8 resoureceType) external override onlyOperator {
        if (resoureceType == RESOURCE_BUCKET) {
            _skipBucketPackage();
        } else if (resoureceType == RESOURCE_OBJECT) {
            _skipObjectPackage();
        } else if (resoureceType == RESOURCE_GROUP) {
            _skipGroupPackage();
        } else {
            revert("DataDAO: Invalid resource type");
        }
    }

    function setTax(uint256 _tax) external onlyOwner {
        require(_tax < 100, "DataDAO: Invalid tax");
        royalty = _tax;
    }

    /*----------------- internal functions -----------------*/
    function _transferOwnership(address newOwner) internal {
        emit OwnershipTransferred(admin, newOwner);
        admin = newOwner;
    }

    function _isOperator(address account) internal view returns (bool) {
        return members[account];
    }

    function requestModeratorSelection() external onlyOwner {
        require(requestId == 0, "DataDAO: Moderator selection in progress");
        require(
            LINK.balanceOf(address(this)) >= fee,
            "DataDAO: Not enough LINK tokens"
        );

        requestId = requestRandomness(keyHash, fee);
    }

    function fulfillRandomness(
        bytes32 requestId,
        uint256 randomness
    ) internal override {
        require(requestId == requestId, "DataDAO: Invalid request ID");
        uint256 index = randomness % contributors.length;
        moderator = contributors[index];
        requestId = 0; // Reset requestId after fulfillment
    }
}
