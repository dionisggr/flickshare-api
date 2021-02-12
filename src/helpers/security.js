const xss = require('xss');

const Security = {
  applyXSS(object) {
    for (const [key, value] of Object.entries(object)) {
      if (typeof value === 'string') {
        object[key] = xss(value);
      };
    };
  }
};

module.exports = Security;