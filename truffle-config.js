const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "A_MNEMONIC";


module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    mainnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.rsk.co'),
      gas: 2500000,
      gasPrice: 59240000,
      network_id: 30
    },
    testnet: {
      provider: () => new HDWalletProvider(mnemonic, 'https://public-node.testnet.rsk.co'),
      gas: 2500000,
      gasPrice: 59240000,
      network_id: 31
    }        
  }
};