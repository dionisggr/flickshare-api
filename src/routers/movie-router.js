const express = require('express');
const MovieService = require('../services/movie-service');
const ListService = require('../services/list-service');
const Security = require('../helpers/security')

const MovieRouter = express.Router();

MovieRouter.route('/')
  .get(async (req, res, next) => {
    const db = req.app.get('db');

    const movies = await MovieService.getAll(db)
      .catch(next);
    
    return res.json(movies);    
  })

MovieRouter.route('/lists/:list')
  .all(async (req, res, next) => {
    const db = req.app.get('db');
    const list_id = parseInt(req.params.list);

    const list = await ListService.findByID(db, list_id)
      .catch(next);

    if (list.user_id !== req.user_id && !req.admin) {
      return next('Unauthorized access');
    };

    next();
  })
  .get(async (req, res, next) => {
    const db = req.app.get('db');
    const list_id = parseInt(req.params.list);

    const listMovies = await MovieService.getListMovies(db, list_id)
      .catch(next);
    
    return res.json(listMovies);    
  })
  .post(async (req, res, next) => {
    const db = req.app.get('db');
    const list_id = parseInt(req.params.list);
    const { movie_id } = req.body;

    const movie = Security.applyXSS({ movie_id, list_id });

    const newMovie = await MovieService.add(db, movie)
      .catch(next);

    return res.status(201).send(newMovie);
  })

MovieRouter.route('/:movie/lists/:list')
  .delete(async (req, res, next) => {
    const db = req.app.get('db');
    const list_id = parseInt(req.params.list);
    const movie_id = parseInt(req.params.movie);

    const list = await ListService.findByID(db, list_id)
      .catch(next);

    if (list.user_id !== req.user_id && !req.admin) {
      return next('Unauthorized access');
    };

    await MovieService.delete(db, list_id, movie_id)
      .catch(next);

    return res.status(301).end();
  })

module.exports = MovieRouter;