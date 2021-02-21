const supertest = require('supertest');
const { expect } = require('chai');
const { createUsers, createLists, createMovies, createListMovies } = require('./app.fixtures.js');
const knex = require('knex');
const app = require('../src/app');
const { TEST_DATABASE_URL } = require('../src/config.js');

describe('The App', () => {
  const db = knex({
    client: 'pg',
    connection: TEST_DATABASE_URL
  });
  
  app.set('db', db);
  
  before('cleaning tables', () => {
    return db.raw('TRUNCATE list_movies, movies, lists, users RESTART IDENTITY CASCADE');
  });

  after('cleaning tables', () => {
    return db.raw('TRUNCATE list_movies, movies, lists, users RESTART IDENTITY CASCADE');
  });
  
  after('disconnect from db', () => {
    return db.destroy();
  });

  context('renders Landing Page', () => {
    it('GET / responds with 200 status and an html page.', () => {
      return supertest(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/);
    });
  });
  context('User Data', () => {
    let users;
    let user = {
      username: 'neweruser',
      first_name: 'New',
      last_name: 'User',
      email: `neweruser@gmail.com`,
      password: 'password',
      admin: false
    };
    beforeEach('inserting users to table', () => {
      users = createUsers();
      return db('users')
        .insert(users)
    });
    afterEach('cleaning tables', () => {
      return db.raw('TRUNCATE users RESTART IDENTITY CASCADE');
    })
    it('GET /api/users responds with 200 status and an array of objects.', () => {
      return supertest(app)
        .get('/api/users')
        .set({'Authorization': 'Bearer my-secret-admin'})
        .expect(200)
        .expect(res => expect(res.body).to.be.an('array'));
    });
    it('POST /api/users responds with 201 status and an object.', () => {
      return supertest(app)
        .post('/api/users')
        .set({'Authorization': 'Bearer my-secret-admin'})
        .send(user)
        .expect(201)
        .expect(res => expect(res.body).to.be.an('object'));
    });
    it('PATCH /api/users/:userID responds with 201 status and an object.', () => {
        const values = {
          username: 'anotherusername',
          first_name: 'Another',
          last_name: 'Name',
          email: `anotherr@gmail.com`,
          admin: false
        }
      return supertest(app)
        .patch('/api/users/1')
        .set({'Authorization': 'Bearer my-secret-admin'})
        .send(values)
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('object');
        })
    });
    it('DELETE /api/users/:userID responds with 301 status.', () => {
      return supertest(app)
        .delete(`/api/users/1`)
        .set({'Authorization': 'Bearer my-secret-admin'})
        .expect(301);
    });
  });
  context('List Data', () => {
    let lists;
    let list = {
      name: "List 7",
      suggestion: false,
      user_id: null,
      movies: []
    };
    before('inserting lists to table', () => {
      lists = createLists();
      return db('lists')
        .insert(lists)
        .catch(error => console.log({ error }))
    });
    it('GET /api/lists responds with 200 status and an array of objects.', () => {
      return supertest(app)
        .get('/api/lists')
        .set({'Authorization': 'Bearer my-secret-admin'})
        .expect(200)
        .expect(res => expect(res.body).to.be.an('array'));
    });
    it('POST /api/lists responds with 201 status and an object.', () => {
      return supertest(app)
        .post('/api/lists')
        .set({'Authorization': 'Bearer my-secret-admin'})
        .send(list)
        .expect(201)
        .then(res => {
          delete res.body.list_id;
          delete list.suggestion;
          expect(res.body).to.be.an('object');
          expect(res.body).to.eql(list);
        });
    });
    it('DELETE /api/lists/:listID responds with 301 status.', () => {
      return supertest(app)
        .delete(`/api/lists/2`)
        .set({'Authorization': 'Bearer my-secret-admin'})
        .expect(301);
    });
  });
  context('Movie Data', () => {
    let movies;
    let movie = {
      "title": "The Shawshank Redemption",
      "id": 2789,
      "release_date": "1994-09-23",
      "popularity": 43.166,
      "vote_average": 8.7,
      "vote_count": 18322,
      "poster_path": "https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates including an older prisoner named Red for his integrity and unquenchable sense of hope."
    };
    before('inserting movies to table', () => {
      movies = createMovies();
      return db('movies')
        .insert(movies)
        .catch(error => console.log({ error }));
    });
    it('GET /api/movies responds with 200 status and an array of objects.', () => {
      return supertest(app)
        .get('/api/movies')
        .set({'Authorization': 'Bearer my-secret-admin'})
        .expect(200)
        .then(res => expect(res.body).to.be.an('array'));
    });
    it('POST /api/movies responds with 201 status and an object.', () => {
      return supertest(app)
        .post('/api/movies')
        .set({'Authorization': 'Bearer my-secret-admin'})
        .send(movie)
        .expect(201)
        .then(res => {
          expect(res.body).to.be.an('object');
        })
        .catch(error => console.log(error));
    });
  });
});

