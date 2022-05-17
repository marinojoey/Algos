//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract noReentrancyMod { 
    bool locked;

    modifier nonReentrant() {
        require(!locked);
        locked = true;
        _;
        locked = false;
    }

    function secure() public nonReentrant {
        payable(msg.sender).transfer(1 ether);
    }
}
