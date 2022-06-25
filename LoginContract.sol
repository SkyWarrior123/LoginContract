//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract LoginContract {
    bytes32 private userName;
    bytes32 private password;

    constructor(bytes32 _username, bytes32 _password) {
        userName = _username;
        password = _password;
    }
}
