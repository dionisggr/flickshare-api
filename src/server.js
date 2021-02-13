const app = require('./app');
const knex = require('knex');
const pg = require('pg');
const { PORT, NODE_ENV, DATABASE_URL, TEST_DATABASE_URL } = require('./config');

pg.defaults.ssl = process.env.NODE_ENV === "production";

app.set('db', knex({
  client: 'pg',
  connection: (NODE_ENV==='test') ? TEST_DATABASE_URL : DATABASE_URL
}));

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}.`)
});