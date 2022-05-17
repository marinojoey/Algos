/*

USE: to deploy a hardhat project that you do not intend to be upgradable
COMMAND (adjust filepaths as necessary): npx hardhat run scripts/deploy.js --network -rinkeby 
NOTE: Contract and contract are two different objects. the 'getContractFactory()' will find your contract inside of your file, not the file itself.

*/

const { ethers } = require("hardhat");

async function main() {
  const nonUpgradeable = await ethers.getContractFactory("nonUpgradeable");
  const contract = await nonUpgradeable.deploy();
  await contract.deployed();

  console.log(contract.address);
  console.log("----------")
  console.log("Verification command below: USE IMPLEMENTATION ADDRESS")
  console.log("npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS 'Constructor argument 1'")
}

main();