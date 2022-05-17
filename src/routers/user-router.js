const express = require('express');
const bcrypt = require('bcrypt');
const validation = require('../helpers/validation');
const UserService = require('../services/user-service');
const Security = require('../helpers/security');

const UserRouter = express.Router();

UserRouter.route('/')
  .get(async (req, res, next) => {
    const db = req.app.get('db');

    if (!req.admin) {
      return next('Unauthorized access.');
    };

    const users = await UserService.getAll(db)
      .catch(next);
    
    return res.json(users);
  })
  .post(async (req, res, next) => {
    const db = req.app.get('db');

    const {
      first_name, last_name, admin,
      username, password, email,
    } = req.body;

    const newUser = Security.applyXSS({
      first_name, last_name, admin,
      username, password, email,
    });

    for (const [key, value] of Object.entries(newUser)) {
      if (!value && value !== false) next(`Missing ${key}.`)
    };

    try {
      newUser.password = await bcrypt.hash(newUser.password, 8);

      await UserService.create(db, newUser);

    } catch (error) { return next(error) };
    
    validation.authentication(req, res, next);
  })

UserRouter.route('/username')
  .post(async (req, res, next) => {
    const db = req.app.get('db');
    const { username } = req.body;

    const user = await UserService.getUsernameData(db, username)
      .catch(next);
    
    const response = (user) ? user.username : null;
    
    return res.json(response);
  })

UserRouter.route('/:user')
  .get(async (req, res, next) => {
    const db = req.app.get('db');
    const user_id = req.params.user;

    if (user_id !== req.user_id || !req.admin) {
      return next('Unauthorized access');
    };

    const user = await UserService.findByID(db, user_id)
      .catch(next);
    
    return res.json(user);
  })
  .patch(async (req, res, next) => {
    const db = req.app.get('db');
    const user_id = parseInt(req.params.user);

    if (user_id !== req.user_id || !req.admin) {
      return next('Unauthorized access');
    };

    const { first_name, last_name, username, email } = req.body;

    const newValues = Security.applyXSS({
      first_name, last_name, username, email
    });

    for (const [key, value] of Object.entries(newValues)) {
      if (!value && value !== false) delete newValues[key];
    };

    const editedUser = await UserService.edit(db, user_id, newValues)
      .catch(next);
    
    return res.json(editedUser);
  })
  .delete(async (req, res, next) => {
    const db = req.app.get('db');
    const user_id = parseInt(req.params.user);

    if (user_id !== req.user_id || !req.admin) {
      return next('Unauthorized access');
    };

    await UserService.delete(db, user_id)
      .catch(next);
    
    return res.status(301).end();
  })

module.exports = UserRouter;