CREATE TABLE IF NOT EXISTS movies (
  movie_id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  tmdb_id INTEGER UNIQUE NOT NULL,
  name TEXT NOT NULL,
  list_id INTEGER REFERENCES lists(list_id) ON DELETE CASCADE ON UPDATE CASCADE
);