const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LoginContract", function () {
  it("Should return the private Login Credentials ", async function () {
    const loginFactory = await ethers.getContractFactory("LoginContract");

    const userName = ethers.utils.formatBytes32String("sahbaaz");  // declaring username as my name
    const password = ethers.utils.formatBytes32String("LetsRock123@#4fgdt"); // setting a difficult password

    const loginContract = await loginFactory.deploy(userName, password);

    await loginContract.deployed();

    const slot0 = await ethers.provider.getStorageAt(loginContract.address, 0);
    const slot1 = await ethers.provider.getStorageAt(loginContract.address, 1);

    const formatUsername = ethers.utils.parseBytes32String(slot0);
    const formatPassword = ethers.utils.parseBytes32String(slot1);

    console.log("userName should be  : ", formatUsername);
    console.log("password should be  : ", formatPassword);


  });
});
