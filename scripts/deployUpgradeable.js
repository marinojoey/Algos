/*

USE: to deploy a hardhat project that you want to be upgradable
COMMAND (adjust filepaths as necessary): npx hardhat run scripts/deployUpgradeable.js --network -rinkeby 
NOTE: Familiarize yourself with proxy and implementation contracts https://docs.openzeppelin.com/contracts/4.x/upgradeable
NOTE: upgrade script can be found in scripts folder

*/

const { ethers, upgrades } = require("hardhat");


async function main() {
  const ContractV1 = await ethers.getContractFactory("ContractV1");
  const proxy = await upgrades.deployProxy(ContractV1);
  await proxy.deployed();

  console.log(proxy.address);
  console.log("----------")
  console.log("Verification command below: USE IMPLEMENTATION ADDRESS")
  console.log("npx hardhat verify --network rinkeby")
}

main();