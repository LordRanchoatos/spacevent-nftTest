require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mainnet.g.alchemy.com/v2/CBAlKSd_HNgnmnUkzctmtOEMNjeycer5`,
      accounts: ["927bed8d56cfc464580d05fd8347a19128dde9af0f590793894c916c380d68f7"]
    },
    matic: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/CBAlKSd_HNgnmnUkzctmtOEMNjeycer5",
      accounts: ["927bed8d56cfc464580d05fd8347a19128dde9af0f590793894c916c380d68f7"]
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/OCykNi_hX6WolqgtZEIcKyrwfGK-dN2j',
      accounts: ["927bed8d56cfc464580d05fd8347a19128dde9af0f590793894c916c380d68f7"]
    }
    // goerli: {
    //   url: process.env.REACT_APP_ALCHEMY_API_URL,
    //   accounts: [ process.env.REACT_APP_PRIVATE_KEY ]
    // }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};