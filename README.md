# Flickshare API
A simple API stop for the Flickshare App for all HTTP-related requests.

The app allows users to create an account, created ordered lists of movie interests and receive suggestions based on these, and if connected, your friends lists.

More info can be found at the [client repo](https://github.com/dionisggr/flickshare-client).

This API stop represents a way for the app to communicate with the list of users, movie lists and movies. The user data contains full name, email, username, password and admin privileges. The list data contains a name and an associated user. The movie data contains properties from its original TMDB (The Movie Database) JSON object. Properties in the app include its TMDB ID, description, release date, popularity score, poster image URL, vote count and average vote.

### API URL:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; https://cryptic-badlands-24275.herokuapp.com/ *(Landing Page)*

### Client Live
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; *(Pending)*

### Client GitHub:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; https://github.com/dionisggr/flickshare-client/

### Deployment Platform:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Heroku

### Languages/Tools
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Javascript, Node.js, Express.js, Knex.js, PostgreSQL, Mocha, Chai, Supertest, Nodemon, Postgrator, Dotenv, JWT, Bcrypt, HTML5, CI scripts

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Loggers:** Morgan \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Securities:** XSS, CORS, Helmet

---

## API Instructions

### Endpoints that require Authentication
Closed endpoints that require a valid username and password to be included in the header body of the request.

#### Login

- Step 1: *(Generate JSON Web Token)*
  - `POST /api/users`
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
- [Create User](): `POST /api/users`

- [Get User](): `GET /api/users/:user`
- [Edit User](): `PATCH /api/users/:user`
- [Delete User](): `DELETE /api/users/:user`

#### List related
Each endpoint manipulates information of general and user lists.
- [Create List](): `POST /api/lists`

- [Get Main Lists](): `GET /api/lists/main` \
*(General suggestion/category lists not associated to users)*

- [Get List](): `GET /api/lists/:list`
- [Edit List](): `PATCH /api/lists/:list`
- [Delete List](): `DELETE /api/lists/:list`

#### Movie related
Each endpoint manipulates information related to movie data.
- [Get All Movies](): `GET /api/movies`
- [Add Movie to Database](): `POST /api/movies`

- [Get Movie](): `GET /api/movies/:movie`

#### Movie-List related
Each endpoint manipulates information related to the movies in lists.
- [Get List Movies](): `GET /api/movies/lists/:list`
- [Add Movie to list](): `POST /api/movies/lists/:list`
- [Delete Movie from list](): `DELETE /api/movies/:movie/lists/:list`

#### Access / Token related
Each endpoint manipulates information related access / token management.
- [Refresh JWT Token](): `PATCH /api/token`

#### Admin related
Each endpoint manipulates information related to all data, only able to be accessed by an Admin user. __Admins can manipulate all previous endpoints as well.__
- [Get All Users](): `GET /api/users`
- [Get All Lists](): `GET /api/lists`

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