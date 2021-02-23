const MovieService = {
  getAll(db) {
    return db('movies')
      .select('*');
  }
  ,
  getListMovies(db, find) {
      if (typeof find === 'number') {
        return db('list_movies')
        .join('movies', { 'movies.movie_id': 'list_movies.movie_id'})
        .select('*')
        .where({ list_id: find });
      } else {
        return db('list_movies')
        .join('movies', { 'movies.movie_id': 'list_movies.movie_id'})
        .select('*')
        .whereIn('list_id', [...find]);
      }
  }
  ,
  findByID(db, find) {
    if (typeof find === 'number') {
      return db('movies')
      .select('*')
      .where({ movie_id: find });
    } else {
      return db('movies')
      .select('*')
      .whereIn('movie_id', [...find]);
    }
  }
  ,
  findByTMDB_ID(db, tmdb_ids) {
    return db('movies')
      .select('*')
      .whereIn('tmdb_id', [...tmdb_ids])
  }
  ,
  add(db, movie) {
    return db('movies')
      .insert(movie)
      .returning('*')
      .then(rows => rows[0]);
  }
  ,
  addToList(db, movie) {
    return db('list_movies')
      .insert(movie)
      .returning('*')
      .then(rows => rows[0]);
  }
  ,
  edit(db, movie_id, values) {
    return db('list_movies')
      .select('*')
      .where({ movie_id })
      .update(values)
      .returning('*')
      .then(rows => rows[0])
  }
  ,
  delete(db, list_id, movie_id) {
    return db('list_movies')
      .where({ movie_id, list_id })
      .del();
  }
  ,
  existsInDatabase(db, tmdb_id) {
    return db('movies')
      .select('*')
      .where({ tmdb_id })
      .first();
  }
  ,
  addMovieGenres(db, genres) {
    return db('movie_genres')
      .insert(genres)
  }
  ,
  addToDatabaseIfNotExists(db, movies) {
    return db('movies')
      .insert(movies)
      .onConflict('tmdb_id')
      .ignore();
  }
  ,
  linkMovies(db, movies) {
    return db('list_movies')
      .insert(movies);
  }
  ,
  unlinkMovies(db, list_id) {
    return db('list_movies')
      .where({ list_id })
      .del();
  }
};

module.exports = MovieService;