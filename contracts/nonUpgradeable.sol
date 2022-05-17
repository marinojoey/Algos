//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract nonUpgradeable { // NOT UPGRADEABLE
    uint256 a = 1;
    uint256 b = 2;
    uint256 count = 0;

    function add() public view returns(uint256) {
        return a+b;
    }

    function incrementOne() public {
        count++;
    }
    function incrementTwo() public {
        count = count +2;
    }
    function getCount() public view returns(uint256) {
        return count;
    }
}
