const jwt = require('jsonwebtoken');

// Generate a new token for the user with the given ID
function generateToken(userId) {
  // Set the token expiration time to one hour from now
  const expiresIn = '1h';

  // Create the token using the user ID and the secret key
  const token = jwt.sign({ userId }, 'my-secret-key', { expiresIn });

  // Return the token and the expiration time
  return {
    token,
    expiresIn,
  };
}

// Verify an incoming token and return the user ID if it is valid
function verifyToken(token) {
  // Try to verify the token using the secret key
  try {
    const { userId } = jwt.verify(token, 'my-secret-key');
    return userId;
  } catch (err) {
    // Return null if the token is invalid or has expired
    return null;
  }
}
