// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SolidityDeveloperCertificate is ERC721, Ownable {
    constructor() ERC721("Solidity Developer Certificate", "SDC") {
        _safeMint(_msgSender(), 0);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://bafkreif5kp6ifc3kejt4x23i23wl6c3qn4dfdpjvuu7qz3lphxirz4yxmm.ipfs.nftstorage.link/";
    }
}
