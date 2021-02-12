BEGIN;

TRUNCATE list_movies, movies, lists, users RESTART IDENTITY CASCADE;

INSERT INTO users
  (username, first_name, last_name, email, password, admin)
VALUES
  ('admin', 'Lightning', 'Mcqueen', 'kachow@email.com', 'password', TRUE),
  ('username 2', 'First 2', 'Last 2', 'email 2', 'password 2', FALSE),
  ('username 3', 'First 3', 'Last 3', 'email 3', 'password 3', FALSE),
  ('username 4', 'First 4', 'Last 4', 'email 4', 'password 4', FALSE),
  ('username 5', 'First 5', 'Last 5', 'email 5', 'password 5', FALSE);

INSERT INTO lists
  (name)
VALUES
  ('List 1'),
  ('List 2'),
  ('List 3'),
  ('List 4'),
  ('List 5');

INSERT INTO lists
  (name, user_id)
VALUES
  ('List 1', 1),
  ('List 2', 1),
  ('List 1', 2),
  ('List 1', 3),
  ('List 1', 4);

INSERT INTO movies
  (name, tmdb_id)
VALUES
  ('Movie 1', 1),
  ('Movie 1', 2),
  ('Movie 2', 3),
  ('Movie 1', 4),
  ('Movie 2', 5),
  ('Movie 1', 6),
  ('Movie 2', 7),
  ('Movie 1', 8),
  ('Movie 2', 9);

INSERT INTO list_movies
  (list_id, movie_id)
VALUES
  (1, 1),
  (1, 2),
  (2, 2),
  (2, 3);

INSERT INTO list_movies
  (list_id, movie_id, user_id)
VALUES
  (3, 3, 1),
  (3, 4, 1),
  (4, 4, 2),
  (4, 5, 3);

COMMIT;