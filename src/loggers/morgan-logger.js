const morgan = require('morgan');
const { NODE_ENV } = require('../config');

const morganOption =
  (NODE_ENV === 'production')
    ? 'tiny'
    : 'common';

const morganLogger = morgan(morganOption);

module.exports = morganLogger;