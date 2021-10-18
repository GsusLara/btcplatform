const bip32 = require('bip32')
const bitcoin = require('bitcoinjs-lib'); 

export default function handler(req, res) {
  const zpub = process.env.ZPUBLIC;
  const redMainet = Object.assign({}, bitcoin.networks.bitcoin,
    {
      bip32: {
        public: 0x02aa7ed3, 
        private: 0x02aa7a99, 
      },
    },
  );
  const publicKeyBech32 = llave => {
    const { address } = bitcoin.payments.p2wpkh({ pubkey: llave.publicKey });
    return address;
  };


  if (req.method === 'GET') {
    const zpubNode = bip32.fromBase58(zpub, redMainet); 
    const path = zpubNode.derivePath(`0/0`); 
    const addr=publicKeyBech32(path);
    res.status(200).json({ direccion: addr});
  } else {
    res.status(400)
  }
}
