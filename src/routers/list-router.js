const express = require('express');
const ListService = require('../services/list-service');
const Security = require('../helpers/security')

const ListRouter = express.Router();

ListRouter.route('/')
  .get(async (req, res, next) => {
    const db = req.app.get('db');

    const lists = await ListService.getMain(db)
      .catch(next);

    return res.json(lists);
  })
  .post(async (req, res, next) => {
    const db = req.app.get('db');
    const { name, user_id } = req.body;

    if (!name) next('Invalid data.');

    const list = Security.applyXSS({ name });

    if (user_id) {
      list.user_id = user_id;
    };

    const newList = await ListService.create(db, list)
      .catch(next);

    return res.status(201).json(newList);
  })

ListRouter.route('/:list')
  .get(async (req, res, next) => {
    const db = req.app.get('db');
    const listID = parseInt(req.params.list);

    const list = await ListService.findByID(listID)
      .catch(next);
    
    return res.json(list);
  })
  .patch(async (req, res, next) => {
    const db = req.app.get('db');
    const listID = parseInt(req.params.list);

    const { name } = req.body;
    const newValues = Security.applyXSS({ name });

    const editedList = await ListService.edit(db, listID, newValues)
      .catch(next);

    return res.json(editedList);
  })
  .delete(async (req, res, next) => {
    const db = req.app.get('db');
    const listID = parseInt(req.params.list);

    await ListService.delete(db, listID)
      .catch(next);
    
    return res.status(301).end();
  })

module.exports = ListRouter;