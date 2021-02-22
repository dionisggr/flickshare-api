const express = require('express');
const ListService = require('../services/list-service');
const ResponseService = require('../services/response-service');
const MovieService = require('../services/movie-service');
const UserService = require('../services/user-service');
const Security = require('../helpers/security');

const ListRouter = express.Router();

ListRouter.route('/')
  .get(async (req, res, next) => {
    const db = req.app.get('db');

    let lists;
    
    if (req.admin) {
      lists = await ListService.getAll(db)
        .catch(next);
    } else if (req.user_id) {
      lists = await ListService.getAllUserLists(db, req.user_id)
        .catch(next);
    } else {
      return next('Unauthorized access');
    };

    const response = await ResponseService.prepareMovieLists(db, lists);

    return res.json(response);
  })
  .post(async (req, res, next) => {
    const db = req.app.get('db');
    const { name, user_id, suggestion, movies } = req.body;
    const tmdb_ids = movies.map(movie => movie.tmdb_id);

    // if (!user_id && !req.admin) {
    //   return next('Unauthorized access');
    // };

    if (!name) next('Missing data.');

    const list = Security.applyXSS({ name, suggestion, user_id: null });

    if (user_id) {
      await UserService.findByID(db, user_id)
        .catch(next);
      // Check if user exists

      list.user_id = user_id;
      // If user exists, add reference to list
    };

    const newList = await ListService.create(db, list)
      .catch(next);
    
    if (movies.length > 0) {
      await MovieService.addToDatabaseIfNotExists(db, movies);

      const foundMovies = await MovieService.findByTMDB_ID(db, tmdb_ids);

      const { list_id } = newList;
  
      const linkedMovies = foundMovies.map(movie => {
        const { movie_id } = movie;
        return { list_id, movie_id };
      });

      await MovieService.linkMovies(db, linkedMovies);
    };

    const response = (await ResponseService.prepareMovieLists(db, [newList]))[0];

    return res.status(201).json(response);
  })

ListRouter.route('/main')
  .get(async (req, res, next) => {
    const db = req.app.get('db');

    const lists = await ListService.getMainLists(db)
      .catch(next);
    
    const response = await ResponseService.prepareMovieLists(db, lists);

    return res.json(response)
  });

ListRouter.route('/:list')
  .get(async (req, res, next) => {
    const db = req.app.get('db');
    const list_id = parseInt(req.params.list);

    const list = await ListService.findByID(db, list_id)
      .catch(next);
    
    if (list.user_id && (list.user_id !== req.user_id && !req.admin)) {
      return next('Unauthorized access');
    };

    const response = (await ResponseService.prepareMovieLists(db, [list]))[0];

    return res.json(response);
  })
  .patch(async (req, res, next) => {
    const db = req.app.get('db');
    const list_id = parseInt(req.params.list);
    const { name, user_id } = req.body;

    if (user_id !== req.user_id && !req.admin) {
      return next('Unauthorized access');
    };

    if (!name) {
      return next('Invalid request.');
    };

    const list = Security.applyXSS({ name, list_id });

    if (user_id) {
      await UserService.findByID(db, user_id)
        .catch(next);
      // Check if user exists

      list.user_id = user_id;
      // If user exists, add reference to list
    };

    const values = { name, user_id };

    await ListService.edit(db, list_id, values)
      .catch(next);

    const response = (await ResponseService.prepareMovieLists(db, [list]))[0];

    return res.status(201).json(response);
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

ListRouter.route('/users/:user')
  .get(async (req, res, next) => {
    const db = req.app.get('db');
    const user_id = parseInt(req.params.user);

    if (user_id !== req.user_id && !req.admin) {
      return next('Unauthorized access');
    };
    
    const lists = await ListService.getAllUserLists(db, user_id)
      .catch(next);
    
    const response = await ResponseService.prepareMovieLists(db, lists);

    return res.json(response);
  })

ListRouter.route('/suggestions/users/:user')
  .get(async (req, res, next) => {
    const db = req.app.get('db');
    const user_id = parseInt(req.params.user);

    if (user_id !== req.user_id && !req.admin) {
      return next('Unauthorized access');
    };
    
    const lists = await ListService.getAllUserSuggestions(db, user_id)
      .catch(next);
    
    const response = await ResponseService.prepareMovieLists(db, lists);

    return res.json(response);
  })
  
module.exports = ListRouter;