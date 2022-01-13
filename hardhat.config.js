require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  // ––– for deploying on matic mumbai testnet –––
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    mumbai: {
      url: `${process.env.ALCHEMY_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  // ––– for deploying on matic mainnet –––
  //
  // defaultNetwork: "matic",
  // networks: {
  //   hardhat: {},
  //   matic: {
  //     url: `${process.env.ALCHEMY_KEY}`,
  //     accounts: [`0x${process.env.PRIVATE_KEY}`],
  //   },
  // },
  // paths: {
  //   sources: "./contracts",
  //   tests: "./test",
  //   cache: "./cache",
  //   artifacts: "./artifacts",
  // },
  // mocha: {
  //   timeout: 20000,
  // },
};
