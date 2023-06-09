// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract AIModelFactory {
    // state variables
    address public owner;
    uint public totalContributions;
    uint public totalRoyalties;
    uint public totalModels;

    struct Model {
        string name;
        address[] contributors;
        uint totalContributions;
        uint royalties;
    }

    mapping(uint => Model) public models;
    mapping(address => uint[]) public contributions;

    // events
    event ModelCreated(uint indexed id, string name, address indexed owner);
    event ContributionAdded(
        uint indexed id,
        address indexed contributor,
        uint amount
    );
    event RoyaltiesPaid(uint indexed id, uint amount);

    // constructor
    constructor() {
        owner = msg.sender;
    }

    // modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can perform this action.");
        _;
    }

    // functions
    function createModel(string memory name) public onlyOwner {
        uint id = totalModels++;
        models[id].name = name;
        models[id].contributors.push(msg.sender);
        contributions[msg.sender].push(id);
        models[id].totalContributions += msg.value;
        totalContributions += msg.value;
        emit ModelCreated(id, name, msg.sender);
    }

    function addContribution(uint id) public payable {
        require(id < totalModels, "Invalid model id.");
        models[id].contributors.push(msg.sender);
        contributions[msg.sender].push(id);
        models[id].totalContributions += msg.value;
        totalContributions += msg.value;
        emit ContributionAdded(id, msg.sender, msg.value);
    }

    function payRoyalties(uint id) public onlyOwner {
        require(id < totalModels, "Invalid model id.");
        uint amount = models[id].totalContributions /
            models[id].contributors.length;
        models[id].royalties += amount;
        totalRoyalties += amount;
        payable(owner).transfer(amount);
        emit RoyaltiesPaid(id, amount);
    }

    function getContributions(
        address contributor
    ) public view returns (uint[] memory) {
        return contributions[contributor];
    }

    function getModel(uint id) public view returns (string memory, uint, uint) {
        return (
            models[id].name,
            models[id].totalContributions,
            models[id].royalties
        );
    }
}

contract DAOFactory {
    // state variables
    address[] public deployedDAOs;

    // events
    event DAOCreated(address indexed dao);

    // functions
    function createDAO(string memory name) public {
        AIModelFactory newDAO = new AIModelFactory();
        deployedDAOs.push(address(newDAO));
        emit DAOCreated(address(newDAO));
    }

    function getDeployedDAOs() public view returns (address[] memory) {
        return deployedDAOs;
    }
}
