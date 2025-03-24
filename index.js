const fs = require('fs');
const bs58 = require('bs58');

// Function to load and convert the keypair
function getPrivateKey(keypairPath) {
  const keypair = JSON.parse(fs.readFileSync(keypairPath, 'utf-8'));
  const keypairBytes = Buffer.from(keypair);
  return bs58.encode(keypairBytes);
}

// Export the function for CommonJS
module.exports = getPrivateKey;
