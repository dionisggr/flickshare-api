const { NODE_ENV } = require('../config');

function errorHandler(error, req, res, next) {
  const response = 
    (NODE_ENV === 'production')
      ? {error: 'Server error.'}
      : console.log('Server error: ', error)
        && {message: error.message, error};
  return res.status(500).send(response);
};

module.exports = errorHandler;