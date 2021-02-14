# Flickshare API
A simple API stop for the Flickshare App for all HTTP-related requests.

The app allows users to create an account, created ordered lists of movie interests and receive suggestions based on these, and if connected, your friends lists.

More info can be found at the [client repo](https://github.com/dionisggr/flickshare-client).

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; This API stop represents a way for the app to communicate with the list of users, movie lists and movies. The user data contains full name, email, username, password and admin privileges. The list data contains a name and an associated user. The movie data contains properties from its original TMDB (The Movie Database) JSON object. Properties in the app include its TMDB ID, description, release date, popularity score, poster image URL, vote count and average vote.

### API URL:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; https://cryptic-badlands-24275.herokuapp.com/ *(Landing Page)*

### Client Live
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *(Pending)*

### Client GitHub:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; https://github.com/dionisggr/flickshare-client/

### Deployment Platform:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Heroku

### Languages/Tools
- **Back-End:** Javascript, Node.js, Express.js, Knex.js, PostgreSQL, Mocha, Chai, Supertest, Nodemon, Postgrator, Dotenv, JWT, Bcrypt, HTML5, CI scripts
- **Loggers:** Morgan
- **Securities:** XSS, CORS, Helmet

---

## Back-End Structure
- Users (database table)
  - user_id (integer, auto-generated)
  - first_name (text, not null)
  - last_name (text, not null)
  - email (text, unique)
  - username (text, unique)
  - password (text, hashed)
  - admin
- Lists (database table)
  - list_id (integer, auto-generated)
  - name (text, not null)
  - user_id (integer, optional)
- Movies (database table)
  - movie_id (integer, auto-generated)
  - name (text, not null)
  - tmdb_id (integer, id from tmdb API)
  - description (text, maximum 150 characters)
  - release_date (text, not date)
  - popularity (numeric, decimal)
  - poster (text, poster image URL)
  - avg_vote (numeric)
  - vote_count (integer)
- Genres (database table)
  - genre_id (auto-generated)
  - name (text, not null)
- Movie Genres (database table)
  - genre_id (references genres.genre_id)
  - movie_id (references movies.movie_id)
- List Movies (database table)
  - list_id (references lists.list_id)
  - movie_id (references movies.movie_id)

---

## API Instructions

### Endpoints that require Authentication
Closed endpoints that require a valid username and password to be included in the header body of the request.

#### Login

- Step 1: *(Generate JSON Web Token)*
  - `POST /api/login`
    - 'Admin' credentials
      - Username: `admin`
      - Password: `password`
- Step 2: &lt;*Use generated JSON Web Token (3 hrs)*&gt;
- Step 3 *(Optional): Refresh JSON Web Token*
  -  `POST /api/token`

### Endpoints that require Authorization
Closed endpoints that require a valid JSON Web Token to be inlcuded in the header 'Authorization' of the request.
```
// Add to request header
headers: {'Authorization': 'Bearer <JSON Web Token>'}
```
If sending content through request body (`POST`), don't forget to add the following in the headers:
```
// Add to request header
headers" {'Content-Type': 'application/json'}
```

#### User related
Each endpoint manipulates information related to users.
- [Create User (Register)](https://github.com/dionisggr/flickshare-api/wiki/Users): `POST /api/users`
- [Get User](https://github.com/dionisggr/flickshare-api/wiki/Users): `GET /api/users/:user`
- [Edit User](https://github.com/dionisggr/flickshare-api/wiki/Users): `PATCH /api/users/:user`
- [Delete User](https://github.com/dionisggr/flickshare-api/wiki/Users): `DELETE /api/users/:user`

#### List related
Each endpoint manipulates information of general and user lists.
- [Get Main Lists](https://github.com/dionisggr/flickshare-api/wiki/Movie-Lists): `GET /api/lists/main` \
*(General suggestion/category lists not associated to users)*
- [Create List](https://github.com/dionisggr/flickshare-api/wiki/Movie-Lists): `POST /api/lists`
- [Get List](https://github.com/dionisggr/flickshare-api/wiki/Movie-Lists): `GET /api/lists/:list`
- [Edit List](https://github.com/dionisggr/flickshare-api/wiki/Movie-Lists): `PATCH /api/lists/:list`
- [Delete List](https://github.com/dionisggr/flickshare-api/wiki/Movie-Lists): `DELETE /api/lists/:list`

#### Movie related
Each endpoint manipulates information related to movie data.
- [Get All Movies](https://github.com/dionisggr/flickshare-api/wiki/Movies): `GET /api/movies`
- [Add Movie to Database](https://github.com/dionisggr/flickshare-api/wiki/Movies): `POST /api/movies`
- [Get Movie](https://github.com/dionisggr/flickshare-api/wiki/Movies): `GET /api/movies/:movie`

#### Movie-List related
Each endpoint manipulates information related to the movies in lists.
- [Get List Movies](https://github.com/dionisggr/flickshare-api/wiki/Movies): `GET /api/movies/lists/:list`
- [Add Movie to list](https://github.com/dionisggr/flickshare-api/wiki/Movies): `POST /api/movies/lists/:list`
- [Delete Movie from list](https://github.com/dionisggr/flickshare-api/wiki/Movies): `DELETE /api/movies/:movie/lists/:list`

#### Access / Token related
Each endpoint manipulates information related access / token management.
- [Login](https://github.com/dionisggr/flickshare-api/wiki/Access-Permission): `POST /api/login`
- [Register](https://github.com/dionisggr/flickshare-api/wiki/Users): `POST /api/users`
- [Refresh JWT Token](https://github.com/dionisggr/flickshare-api/wiki/Access-Permission): `PATCH /api/token`

#### Admin related
Each endpoint manipulates information related to all data, only able to be accessed by an Admin user. __Admins can manipulate all previous endpoints as well.__
- [Get All Users](https://github.com/dionisggr/flickshare-api/wiki/Users): `GET /api/users`
- [Get All Lists](https://github.com/dionisggr/flickshare-api/wiki/Movie-Lists): `GET /api/lists`

---

## Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
- Implementation of movie likes
- Implementation of list likes
- Sending movie-list suggestions
- Copy other user's lists

---

## Local Dev Set Up
Start a database server with `pg_ctl start`.

If using user `admin`:

```bash
mv example.env .env
createdb -U admin flickshare
createdb -U admin flickshare-test
```

If your `admin` user has a password be sure to set it in `.env` for all appropriate fields. Or if using a different user, update appropriately.

```bash
npm install
npm run migrate
env MIGRATION_DB_NAME=flickshare-test npm run migrate
```

To start the application, use `npm start`. Tests will run automatically. \
Alternatively, to run development mode, use `npm run dev`. Tests will not run.

To seed the database: `psql -U admin -d flickshare -f ./seeds/seed.flickshare.sql`.

And `npm test` should work at this point.

### Configuring Postgres
For tests involving time to run properly, configure your Postgres database to run in the UTC timezone.

1. Locate the `postgresql.conf` file for your Postgres installation.
   1. E.g. for an OS X, Homebrew install: `/usr/local/var/postgres/postgresql.conf`
   2. E.g. on Windows, _maybe_: `C:\Program Files\PostgreSQL\11.2\data\postgresql.conf`
   3. E.g  on Ubuntu 18.04 probably: '/etc/postgresql/10/main/postgresql.conf'
2. Find the `timezone` line and set it to `UTC`:

```conf
# - Locale and Formatting -

datestyle = 'iso, mdy'
#intervalstyle = 'postgres'
timezone = 'UTC'
#timezone_abbreviations = 'Default'     # Select the set of available time zone
```