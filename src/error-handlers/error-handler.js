const { NODE_ENV } = require('../config');

function errorHandler(error, req, res, next) {
  console.log('Server error:', error);
  
  const response = 
    (NODE_ENV === 'production')
      ? { error: 'Server error.' }
      : { error };
  
  return res.status(500).send(response);
};

module.exports = errorHandler;