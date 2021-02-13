const MovieService = {
  getAll(db) {
    return db('movies')
      .select('*');
  }
  ,
  getListMovies(db, list_id) {
    return db('list_movies')
      .select('movie_id')
      .where({ list_id });
  }
  ,
  findByID(db, movie_id) {
    return db('list_movies')
      .select('*')
      .where({ movie_id });
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
};

module.exports = MovieService;