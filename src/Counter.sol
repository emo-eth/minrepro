// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {console2} from "../lib/forge-std/src/console2.sol";
import {console2} from "forge-std/console2.sol";

contract Counter {
    uint256 public number;

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }
}
