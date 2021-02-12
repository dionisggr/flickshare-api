const express = require('express');
const { authorization, authentication } = require('../helpers/validation');
const UserService = require('../services/user-service')

const UserRouter = express.Router();

UserRouter.route('/')
  .get(async (req, res, next) => {
    const db = req.app.get('db');

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

    const newUser = {
      first_name, last_name, admin,
      username, password, email,
    };

    for (const [key, value] of Object.entries(newUser)) {
      if (!value && value !== false) next(`Missing ${key}.`)
    };

    await UserService.create(db, newUser)
      .catch(next);
    
    authentication(req, res, next);
  })

UserRouter.route('/:user')
  .get(async (req, res, next) => {
    const db = req.app.get('db');
    const userID = req.params.user;

    const user = await UserService.findByID(db, userID)
      .catch(next);
    
    return res.json(user);
  })
  .patch(async (req, res, next) => {
    const db = req.app.get('db');
    const user_id = parseInt(req.params.user);

    const {
      first_name, last_name, admin,
      username, password, email
    } = req.body;

    const newValues = {
      first_name, last_name, admin,
      username, password, email
    };

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

    await UserService.delete(db, user_id)
      .catch(next);
    
    return res.status(301).end();
  })

module.exports = UserRouter;