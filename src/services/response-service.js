const MovieService = require('./movie-service');

const ResponseService = {
  prepareMovieLists: async (db, lists) => {  
    const list_ids = lists.map(list => parseInt(list.list_id));

    const listMovies = await MovieService.getListMovies(db, list_ids);

    const response = lists.map(list => {
      const { list_id, user_id, name } = list;
      const movies = listMovies.filter(movie => movie.list_id === list.list_id);

      return { list_id, name, movies, user_id }
    });

    return response;
  }
};

module.exports = ResponseService;