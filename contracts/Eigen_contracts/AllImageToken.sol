// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AIImageToken is ERC721 {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;
    mapping(uint256 => string) private _tokenURIs;

    constructor() ERC721("AIImageToken", "AIT") {}

    function mint(
        address owner,
        string memory tokenURI
    ) external returns (uint256) {
        _tokenIds.increment();

        uint256 tokenId = _tokenIds.current();
        _mint(owner, tokenId);
        _setTokenURI(tokenId, tokenURI);

        return tokenId;
    }

    function _setTokenURI(
        uint256 tokenId,
        string memory _tokenURI
    ) internal virtual {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI set of nonexistent token"
        );
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );
        return _tokenURIs[tokenId];
    }
}
