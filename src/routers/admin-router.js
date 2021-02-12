const express = require('express');
const ListService = require('../services/list-service');

const AdminRouter = express.Router();

AdminRouter.route('/lists')
  .get(async (req, res, next) => {
    const db = req.app.get('db');

    const lists = await ListService.getAll(db)
      .catch(next);
    
    return res.json(lists);
  })
  .post(async (req, res, next) => {
    const db = req.app.get('db');
    const { name } = req.body;

    const list = { name };

    const newList = await ListService.create(db, list)
      .catch(next);

    return res.status(201).send(newList);
  })

module.exports = AdminRouter;