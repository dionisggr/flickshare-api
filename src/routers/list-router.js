const express = require('express');
const ListService = require('../services/list-service');
const UserService = require('../services/user-service');
const Security = require('../helpers/security')

const ListRouter = express.Router();

ListRouter.route('/')
  .get(async (req, res, next) => {
    const db = req.app.get('db');

    if (!req.admin) {
      return next('Unauthorized access');
    };

    const lists = await ListService.getAll(db)
      .catch(next);

    return res.json(lists);
  })
  .post(async (req, res, next) => {
    const db = req.app.get('db');
    const { name, user_id } = req.body;

    if (user_id !== req.user_id && !req.admin) {
      return next('Unauthorized access');
    };

    if (!name) next('Invalid data.');

    const list = Security.applyXSS({ name });

    if (user_id) {
      await UserService.findByID(db, user_id)
        .catch(next);
      // Check if user exists

      list.user_id = user_id;
    };

    const newList = await ListService.create(db, list)
      .catch(next);

    return res.status(201).json(newList);
  })

ListRouter.route('/main')
  .get(async (req, res, next) => {
    const db = req.app.get('db');

    const lists = await ListService.getMain(db)
      .catch(next);

    return res.json(lists);
  })

ListRouter.route('/:list')
  .get(async (req, res, next) => {
    const db = req.app.get('db');
    const list_id = parseInt(req.params.list);

    const list = await ListService.findByID(db, list_id)
      .catch(next);
    
    if (list.user_id !== req.user_id && !req.admin) {
      return next('Unauthorized access');
    };  
    
    return res.json(list);
  })
  .patch(async (req, res, next) => {
    const db = req.app.get('db');
    const list_id = parseInt(req.params.list);

    const list = await ListService.findByID(db, list_id)
      .catch(next);

    if (list.user_id !== req.user_id && !req.admin) {
      return next('Unauthorized access');
    };  

    const { name } = req.body;
    const newValues = Security.applyXSS({ name });

    const editedList = await ListService.edit(db, list_id, newValues)
      .catch(next);

    return res.json(editedList);
  })
  .delete(async (req, res, next) => {
    const db = req.app.get('db');
    const list_id = parseInt(req.params.list);

    const list = await ListService.findByID(db, list_id)
      .catch(next);

    if (list.user_id !== req.user_id && !req.admin) {
      return next('Unauthorized access');
    };

    await ListService.delete(db, list_id)
      .catch(next);
    
    return res.status(301).end();
  })

module.exports = ListRouter;