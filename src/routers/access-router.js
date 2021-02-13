const express = require('express');
const validation = require('../helpers/validation');

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

module.exports = AccessRouter;