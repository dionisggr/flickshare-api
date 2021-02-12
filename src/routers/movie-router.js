const express = require('express');
const MovieService = require('../services/movie-service');
const Security = require('../helpers/security')

const MovieRouter = express.Router();

MovieRouter.route('/:list/movies')
  .get(async (req, res, next) => {
    const db = req.app.get('db');
    const listID = parseInt(req.params.list);

    const listMovies = await MovieService.getListMovies(db, listID)
      .catch(next);
    
    return res.json(listMovies);    
  })
  .post(async (req, res, next) => {
    const db = req.app.get('db');
    const list_id = req.params.list;
    const { movie_id } = req.body;

    const movie = Security.applyXSS({ movie_id, list_id });

    const newMovie = await MovieService.add(db, movie)
      .catch(next);

    return res.status(201).send(newMovie);
  })

MovieRouter.route('/:list/movies/:movie')
  .delete(async (req, res, next) => {
    const db = req.app.get('db');
    const listID = req.params.list;
    const movieID = req.params.movie;

    await MovieService.delete(db, listID, movieID)
      .catch(next);

    return res.status(301).end();
  })

module.exports = MovieRouter;