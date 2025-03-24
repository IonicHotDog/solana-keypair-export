# solana-keypair-export

This package does exactly one thing:<br>
it reads a Solana keypair JSON file and spits out a base58-encoded private key string you can paste into Phantom wallet's import flow.

That’s it. No CLI flags. No validation.<br>
If you give it garbage, it gives you garbage back.

I built it because I couldn’t find one, didn’t feel like overthinking it, and wanted to be able to grab it from whatever machine I was stuck on.<br>
Now it’s floating around the internet, and somehow it’s your problem too.

## Install

```bash
npm install solana-keypair-export
```

## Usage

```
const getPrivateKey = require('solana-keypair-export');

const privateKey = getPrivateKey('./path/to/your/keypair.json');
console.log(privateKey);
```

That’s it. It reads the file, converts the bytes, and gives you a base58 string you can paste straight into Phantom wallet’s import screen.<br>
If it breaks, well, maybe don’t give it garbage input.

## License

Public domain, basically. [CC0](https://creativecommons.org/publicdomain/zero/1.0/).

Use it, fork it, forget it existed, up to you.
