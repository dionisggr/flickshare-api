BEGIN;

TRUNCATE list_movies, movie_genres, genres, movies, lists, users RESTART IDENTITY CASCADE;

INSERT INTO users
  (username, first_name, last_name, email, password, admin)
VALUES
  ('admin', 'Lightning', 'Mcqueen', 'admin@email.com', '$2b$08$XpZWKEoZiLDDk6UMctbQCONuYPimQMUfhpgDNv0ZK.ZD3Jvldw2J2', TRUE),
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
  ('List 6', 1),
  ('List 7', 1),
  ('List 8', 2),
  ('List 9', 3),
  ('List 10', 4);

INSERT INTO movies
  (name, tmdb_id, release_date, popularity, avg_vote, vote_count, poster, description)
VALUES
  ('Wonder Woman', 464052, '2020-12-16', 2253.729, 7, 3486, 'https://image.tmdb.org/t/p/original/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg', 'Wonder Woman comes into conflict with the Soviet Union during the Cold War in the 1980s and finds a formidable foe by the name of the Cheetah.'),
  ('Vanguard', 604822, '2020-09-30', 1245.254, 6.6, 182, 'https://image.tmdb.org/t/p/original/vYvppZMvXYheYTWVd8Rnn9nsmNp.jpg', 'Covert security company Vanguard is the last hope of survival for an accountant after he is targeted by the world''s deadliest mercenary organization.'),
  ('Finding Ohana', 644092, '2021-01-29', 950.433, 6.9, 102, 'https://image.tmdb.org/t/p/original/tTWl37oAYRXS3D5mEHmjveXXyrN.jpg', 'Two Brooklyn siblings'' summer in a rural Oahu town takes an exciting turn when a journal pointing to long-lost treasure sets them on an adventure, leading them to reconnect with their Hawaiian heritage.'),
  ('Ashfall', 581387, '2019-12-19', 791.217, 6.7, 183, 'https://image.tmdb.org/t/p/original/zoeKREZ2IdAUnXISYCS0E6H5BVh.jpg', 'Stagnant since 1903, at an elevation of 9000", a volcano erupts on the mythical and majestic Baekdu Mountain.'),
  ('Batman: Soul of the Dragon', 732450, '2021-01-12', 406.89, 7.2, 83, 'https://image.tmdb.org/t/p/original/uDhnTtSxU5a8DtZdbbin3aZmkmU.jpg', 'Bruce Wayne faces a deadly menace from his past, with the help of three former classmates: world-renowned martial artists Richard Dragon, Ben Turner and Lady Shiva.');

INSERT INTO genres
  (genre_id, name)
VALUES
  (1, 'Genre 1'),
  (2, 'Genre 2'),
  (3, 'Genre 3'),
  (4, 'Genre 4'),
  (5, 'Genre 5'),
  (6, 'Genre 6'),
  (7, 'Genre 7'),
  (8, 'Genre 8'),
  (9, 'Genre 9');

INSERT INTO movie_genres
  (genre_id, movie_id)
VALUES
  (1, 1),
  (1, 2),
  (2, 1),
  (2, 3),
  (3, 2),
  (3, 4),
  (4, 3),
  (4, 5),
  (5, 4);

INSERT INTO list_movies
  (list_id, movie_id)
VALUES
  (1, 1),
  (1, 2),
  (2, 2),
  (2, 3);

INSERT INTO list_movies
  (list_id, movie_id)
VALUES
  (3, 3),
  (3, 4),
  (4, 4),
  (4, 5);

COMMIT;