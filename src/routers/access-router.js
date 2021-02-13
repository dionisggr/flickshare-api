const express = require('express');
const validation = require('../helpers/validation');

const AccessRouter = express.Router();

AccessRouter.route('/')
  .patch(async (req, res) => {
    const db = req.app.get('db');
    const { flickshareToken } = req.body;

    const newToken = await validation.refreshToken(flickshareToken);

    return res.json(newToken);
  });

module.exports = AccessRouter;