# My Ethereum Development Algorithms

This repository is intended to house commonly used scripts and algorithms- particularly for Hardhat and Ethers.js.      
     
I hope you can find it useful.     
     
It is by no means an exhaustive - rather just my own most used.   

---
## To get started:

1. Initialize NPM inside your project:    
   `npm init -y`
2. Install dependencies. The following should cover everything you need:      
   ```npm install --save-dev dotenv @nomiclabs/hardhat-etherscan hardhat-gas-reporter @openzeppelin/hardhat-upgrades @openzeppelin/contracts-upgradeable @openzeppelin/contracts```
3. Configure your .env based off of the .env.example
4. Configure your hardhat.config.js:
   ```require("@nomiclabs/hardhat-etherscan");
    require('@openzeppelin/hardhat-upgrades');
    require("dotenv").config();
    require("@nomiclabs/hardhat-ethers");
    require("@nomiclabs/hardhat-waffle");
    require("hardhat-gas-reporter");

    module.exports = {
        solidity: "0.8.4",
        gasReporter: {
            currency: 'USD',
            coinmarketcap: process.env.COINMARKET_KEY,
            gasPriceApi: "https://api.etherscan.io/api?module=proxy&action=eth_gasPrice"
        },
        networks: {
            rinkeby: {
            url: process.env.RINKEBY_URL,
            accounts: [process.env.METAMASK_PRIVATE_KEY]
            },
            ropsten: {
            url: process.env.ROPSTEN_URL,
            accounts: [process.env.METAMASK_PRIVATE_KEY]
            }
        },
        etherscan: { 
            apiKey: {
            rinkeby: process.env.ETHERSCAN_KEY,
            ropsten: process.env.ETHERSCAN_KEY,
            }
        }
    };```
5. Explore the files and hopefully you'll find something useful!
