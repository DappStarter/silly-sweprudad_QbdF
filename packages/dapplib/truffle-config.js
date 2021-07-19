require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter brand venture strong roof noise atom install cart flip gift'; 
let testAccounts = [
"0xc66d13b83ab392b08a8252940fa9c67a634881ceeb6651013225ba16fd5185f0",
"0x80432f602b9881b498b3efdb57226f128a4c050f6be62f4f860b26b0423637ba",
"0x949bef3f4ed1956abef499a28a597b60a40af3f65cbbeff2408da029ceb87023",
"0x8b46af13d4799fc98ae400324eb0e54ced49ccdd9502a7017d5be9a5492fd8c0",
"0x975ebb3d9dfe33b11a9d0f73f923e8cf16103ee8dfa10374fb7cb04c6c62d0a4",
"0x63505ce2657a689324778b979632c23ddc12455cd773b2beac99950272be2b49",
"0x20cf8fcb94b2a835c624ae9ace966b1a2c3b04b398a07f4c45b4783890000041",
"0x6b4b166c2c5e5b6914da41d15ab0a54275ae17c0dd71288688b40715545be363",
"0xf1c5e4999f2268872de89bb50a50c8ac64141440918e01e53905e19786d7d9b1",
"0x8c114f0ea430f8da12522483e291d6baafe35b0c2fae690e6ca45f8978c198b6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


