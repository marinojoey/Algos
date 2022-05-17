const { ethers, upgrades } = require("hardhat");
const chai = require("chai");
const { assert, expect } = chai;
const { solidity } = require("ethereum-waffle");
chai.use(solidity);

describe("nonUpgradeable", function () {
  let nonUpgradeable;
  let owner;
  let user1;
  let Contract;

  function readable(num) {
    return parseInt(ethers.utils.formatEther(num))
  }
  
  before(async function() {
    [owner, user1] = await ethers.getSigners();
    nonUpgradeable = await ethers.getContractFactory("nonUpgradeable");
    Contract = await nonUpgradeable.deploy();
    await Contract.deployed();

    const tx = await Contract.connect(user1).incrementOne();
    await tx.wait();
  });
  describe("Contract Functionality", function() {
    it("Should return 3 for the add function", async function () {        
      await expect(await Contract.add()).to.equal(3);
    });
  });
});

describe("State Changing", function () {
  let nonUpgradeable;
  let owner;
  let user1;
  let Contract;

  function readable(num) {
    return parseInt(ethers.utils.formatEther(num))
  }
  
  before(async function() {
    [owner, user1] = await ethers.getSigners();

    nonUpgradeable = await ethers.getContractFactory("nonUpgradeable");

    Contract = await nonUpgradeable.deploy();

    await Contract.deployed();

    const tx = await Contract.connect(user1).incrementOne(); // 1 Gwei
    await tx.wait();
  });
  describe("State should have been changed", function() {
    it("Should be One", async function () {   
      const count = await Contract.getCount();
      expect(count).to.equal(1);
    });
  });
});