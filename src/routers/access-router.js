const express = require('express');
const bcrypt = require('bcrypt');
const validation = require('../helpers/validation');
const UserService = require('../services/user-service');

const AccessRouter = express.Router();

AccessRouter.route('/token')
  .patch(async (req, res) => {
    const db = req.app.get('db');
    const { flickshareToken } = req.body;

    const newToken = await validation.refreshToken(flickshareToken);

    return res.json(newToken);
  });

AccessRouter.route('/login')
  .post(async (req, res, next) => {
    validation.authentication(req, res, next);
  });

AccessRouter.route('/users/:user/password')
  .patch(async (req, res, next) => {   
    const db = req.app.get('db');
    const { password } = req.body;
    const user_id = parseInt(req.params.user);

    const hashed = await bcrypt.hash(password, 8);

    const result = await UserService.changePassword(db, user_id, hashed)
      .catch(error => console.log(error));
    
    return res.status(201).send({ result });
  });

module.exports = AccessRouter;