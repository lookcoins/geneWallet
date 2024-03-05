const { ethers } = require('ethers');

function createWallet() {
    const wallet = ethers.Wallet.createRandom();
    return {
        address: wallet.address,
        mnemonic: wallet.mnemonic.phrase,
        privateKey: wallet.privateKey
    };
}

module.exports = { createWallet };
