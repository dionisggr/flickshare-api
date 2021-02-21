function createUsers() {
  return [
    {
      username: 'newuser',
      first_name: 'New',
      last_name: 'User',
      email: `newuser@gmail.com`,
      password: 'password',
      admin: false
    },
    {
      username: 'anotheruser',
      first_name: 'Another',
      last_name: 'User',
      email: `another@gmail.com`,
      password: 'password',
      admin: false
    },
    {
      username: 'yetanotheruser',
      first_name: 'Yet',
      last_name: 'Another',
      email: `yetanother@gmail.com`,
      password: 'password',
      admin: false
    }
  ];
};

function createLists() {
  return [
    {
        "name": "A Main List",
        "suggestion": false,
    },
    {
        "name": "Another List",
        "suggestion": false,
    },
    
    {
        "name": "Yet Another List",
        "suggestion": false,
    },
    {
        "name": "So Many Lists",
        "suggestion": false,
    }
  ]
};

function createMovies() {
  return [
    {
      "name": "The Shawshank Redemption",
      "tmdb_id": 278,
      "release_date": "1994-09-23",
      "popularity": 43.166,
      "avg_vote": 8.7,
      "vote_count": 18322,
      "poster": "https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      "description": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates including an older prisoner named Red for his integrity and unquenchable sense of hope."
    },
    {
      "name": "Wolfwalkers",
      "tmdb_id": 441130,
      "release_date": "2020-10-26",
      "popularity": 24.11,
      "avg_vote": 8.7,
      "vote_count": 249,
      "poster": "https://image.tmdb.org/t/p/original/ehAKuE48okTuonq6TpsNQj8vFTC.jpg",
      "description": "In a time of superstition and magic, when wolves are seen as demonic and nature an evil to be tamed, a young apprentice hunter comes to Ireland with her father to wipe out the last pack. But when she saves a wild native girl, their friendship leads her to discover the world of the Wolfwalkers and transform her into the very thing her father is tasked to destroy."
    },
    {
      "name": "Vanguard",
      "tmdb_id": 604822,
      "release_date": "2020-09-30",
      "popularity": 999.598,
      "avg_vote": 6.5,
      "vote_count": 200,
      "poster": "https://image.tmdb.org/t/p/original/vYvppZMvXYheYTWVd8Rnn9nsmNp.jpg",
      "description": "Covert security company Vanguard is the last hope of survival for an accountant after he is targeted by the world''s deadliest mercenary organization."
    }
  ]
};

function createListMovies() {
  return [
    {
        "list_id": 1,
        "movie_id": 1,
    },
    {
        "list_id": 1,
        "movie_id": 2,
    },
    
    {
        "list_id": 2,
        "movie_id": 1,
    },
    {
        "list_id": 2,
        "movie_id": 3,
    },
    {
        "list_id": 3,
        "movie_id": 2,
    }
  ]
};

module.exports = {
  createUsers,
  createLists,
  createMovies,
  createListMovies
};