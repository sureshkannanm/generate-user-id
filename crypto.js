const crypto = require('crypto');
const algorithm = 'aes-256-cbc';

// Encrypt
function encrypt(text, password) {
  const cipher = crypto.createCipher(algorithm, password);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

let message = "Hello, World!";
let password = "mypassword";

console.log("Encrypted message: " + encrypt(message, password));

// Decrypt
function decrypt(text, password) {
  const decipher = crypto.createDecipher(algorithm, password);
  let decrypted = decipher.update(text, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

console.log("Decrypted message: " + decrypt(encrypted, password));
