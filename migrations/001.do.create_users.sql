CREATE TABLE IF NOT EXISTS users (
  user_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  admin BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS lists (
  list_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name TEXT NOT NULL,
  suggestion BOOLEAN DEFAULT FALSE,
  user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS movies (
  movie_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  name TEXT NOT NULL,
  tmdb_id INTEGER UNIQUE NOT NULL,
  description TEXT NOT NULL,
  release_date TEXT NOT NULL,
  popularity NUMERIC NOT NULL,
  poster TEXT,
  avg_vote NUMERIC,
  vote_count NUMERIC
);

CREATE TABLE IF NOT EXISTS list_movies (
  list_id INTEGER REFERENCES lists(list_id) ON DELETE CASCADE ON UPDATE CASCADE,
  movie_id INTEGER REFERENCES movies(movie_id) ON DELETE CASCADE ON UPDATE CASCADE,
  UNIQUE (list_id, movie_id)
);