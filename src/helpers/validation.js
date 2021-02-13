const { API_KEY, ADMIN_KEY } = require('../config');
const bcrypt = require('bcrypt');
const UserService = require('../services/user-service');
const TokenService = require('../services/token-service');

const validation = {
  authorization: async (req, res, next) => {
    const bearer = req.get('Authorization') || '';
    const auth = bearer.split('Bearer ')[1];

    if (!auth) {
      return next('Missing Bearer token')
    };

    if (auth === API_KEY) {
      return next();
    };

    if (auth === ADMIN_KEY) {
      req.admin = true;
      return next();
    };
    
    try {
      const decoded = await TokenService.validate(auth);
      req.user_id = decoded.user_id;
    } catch (error) { return next('Unauthorized access.') };
    
    next();
  }
  ,
  authentication: async (req, res, next) => {
    const db = req.app.get('db');
    const { username, password } = req.body;
    
    try {
      const payload = await UserService.getUsernameData(db, username);
      // Returns 'user_id' and 'admin' boolean
    
      const found = await UserService.findPassword(db, username);

      const passwordsMatch = await bcrypt.compare(password, found.password);

      if (!passwordsMatch) return next('Invalid password.');
    
      const token = await TokenService.generate(payload);

      return res.status(201).send({ flickshareToken: token });
      
    } catch (error) { return next(error) };
  }
  ,
  refreshToken: async (req, res, next) => {
    const { flickshareToken } = req.body;

    try {
      const payload = await TokenService.validate(flickshareToken);

      const newToken = await TokenService.generate(payload);

      return res.json({ flickshareToken: newToken });

    } catch (error) { return next(error) };
  }
};

module.exports = validation;