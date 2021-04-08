require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good clock bottom solution mansion creek stick mad hunt lock suspect slogan'; 
let testAccounts = [
"0x3814e661a30128aa9f3a27f1bd738aa2e48da5ca558e0e1d1aa32591a5cd92f4",
"0x2e30c6cd602a89c448def45149a6ea86b4d1f513512e906a4a8a3bba8ecfca77",
"0xe364b47cca5198fb6e58da421ce13882446bc9a82584a1f8059e130393c9616c",
"0x38cc228d7572737d466c8f64d4d825372045f322350bd5b75e71ce8b2b1e101f",
"0xb52d7a1d0df75338d78e12c8474c115b1b040546e42bfe7c8032f2ee29ba3030",
"0x4e70e6071b1ade919522461048a6d338ad9fc48dede96e4a93adcc3af9f9b21a",
"0x44a4fa1f9729668ab06540b040142c76cc590ce2393971bb3f6cc9f8ec56d888",
"0x65168253063623db637aecbf14c4452d1b9e76b6477e75f38dad843dceb5b13a",
"0xf9595e833f841b3319f912a538dcf4956ab307c3eae91aaed428415c550484e2",
"0xae37d41213b2935b6edcc510d2a7d383b71f567c74ed880d8d1620da6dfd841b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
