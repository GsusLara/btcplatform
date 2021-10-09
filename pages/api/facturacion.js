// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const bitcoin = require('bitcoinjs-lib'); 
const bip32 = require('bip32');

export default function handler(req, res) {
  const zpub = process.env.ZPUBLIC;
  const redMainet = Object.assign({}, bitcoin.networks.bitcoin,
    {
      bip32: {
        public: 0x04b24746, 
        private: 0x04b2430c, 
      },
    },
  );
  const publicKeyBech32 = llave => {
    const { address } = bitcoin.payments.p2wpkh({ pubkey: llave.publicKey });
    return address;
  };


  if (req.method === 'GET') {
    const zpubNode = bip32.fromBase58(zpub, redMainet); // obtiene los datos de la red y crea el zpub en toBase58 - este es seguro no contiene la llave privada.
    const path = zpubNode.derivePath(`0/10`);//configuracion para poder crear direcciones a partir de llave publica, el ultimo cero es el concecutivo para dorecciones de recepción 
    const addr=publicKeyBech32(path);//genera una direccion de recepción 
    res.status(200).json({ direccion: addr})
  } else {
    res.status(400)
  }
}
