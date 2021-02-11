const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRY } = require('../config');

const TokenService = {
  generate(payload) {
    const options = { expiresIn: JWT_EXPIRY, algorithm: 'HS256' };

    return jwt.sign(payload, JWT_SECRET, options);
  }
  ,
  validate(token) {
    return jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
  }
};

module.exports = TokenService;