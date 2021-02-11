BEGIN;

TRUNCATE list_movies, user_lists, movies, lists, users RESTART IDENTITY CASCADE;

INSERT INTO users
  (username, first_name, last_name, email, password, admin)
VALUES
  ('admin', 'Lightning', 'Mcqueen', 'kachow@email.com', 'password', TRUE),
  ('username 2', 'First 2', 'Last 2', 'email 2', 'password 2', FALSE),
  ('username 3', 'First 3', 'Last 3', 'email 3', 'password 3', FALSE),
  ('username 4', 'First 4', 'Last 4', 'email 4', 'password 4', FALSE),
  ('username 5', 'First 5', 'Last 5', 'email 5', 'password 5', FALSE);

INSERT INTO lists
  (name, user_id)
VALUES
  ('list 1', 1),
  ('list 2', 2),
  ('list 3', 3),
  ('list 4', 4),
  ('list 5', 5);

INSERT INTO movies
  (name, list_id, tmdb_id)
VALUES
  ('list 1', 1, 1),
  ('list 2', 2, 2),
  ('list 3', 3, 3),
  ('list 4', 4, 4),
  ('list 5', 5, 5);

INSERT INTO user_lists
  (list_id, user_id)
VALUES
  (1, 1),
  (1, 2),
  (2, 2),
  (2, 3),
  (3, 3),
  (3, 4),
  (4, 4),
  (4, 5),
  (5, 5);

INSERT INTO list_movies
  (list_id, movie_id)
VALUES
  (1, 1),
  (1, 2),
  (2, 2),
  (2, 3),
  (3, 3),
  (3, 4),
  (4, 4),
  (4, 5),
  (5, 5);

COMMIT;