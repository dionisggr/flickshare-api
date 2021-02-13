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
  .post(async (req, res, next) => {
    const db = req.app.get('db');
    const {
      title: name, genre_ids,
      id: tmdb_id, overview: description,
      vote_average: avg_vote, poster_path: poster,
      release_date, popularity, vote_count
    } = req.body;

    const movie = Security.applyXSS({
      name, tmdb_id, poster,
      description, avg_vote,
      release_date, popularity,
      vote_count
    });

    try {
      const newMovie = await MovieService.add(db, movie);
      const { movie_id } = newMovie;

      const genres = genre_ids.map(genre_id => {
        return { genre_id, movie_id };
      });

      await MovieService.addMovieGenres(db, genres);

      return res.status(201).json(newMovie);
    } catch (error) { return next(error) };

  });

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
    const {
      title: name, genre_ids,
      id: tmdb_id, overview: description,
      vote_average: avg_vote, poster_path: poster,
      release_date, popularity, vote_count
    } = req.body;

    const movie = Security.applyXSS({
      name, tmdb_id, poster,
      description, avg_vote,
      release_date, popularity,
      vote_count
    });

    try {
      let foundMovie = await MovieService.existsInDatabase(db, tmdb_id);

      if (!foundMovie) {
        movie.genres = genre_ids.map(genre_id => {
          return { genre_id, movie_id };
        });

        foundMovie = await MovieService.add(db, movie);
      };

      const { movie_id } = foundMovie;

      const listMovie = Security.applyXSS({ movie_id, list_id });
      
      const newMovie = await MovieService.addToList(db, listMovie);
      
      return res.status(201).json(newMovie);
    } catch (error) { return next(error) };

  });

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
  });

module.exports = MovieRouter;