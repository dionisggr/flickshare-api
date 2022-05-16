const knex = require('knex');
const pg = require('pg');
const app = require('./app');
const { PORT, DATABASE_URL } = require('./config');

pg.defaults.ssl = true;

app.set('db', knex({
  client: 'pg',
  connection: DATABASE_URL
}));

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}.`)
});
