require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const validation = require('./validation');
const errorHandler = require('./error-handler');
const { NODE_ENV } = require('./config');

const app = express();
const morganOption =
  (NODE_ENV === 'production')
    ? 'tiny'
    : 'common';

app.use(helmet());
app.use(cors());
app.use(morgan(morganOption));
app.use(express.json()); // BodyParser

app.use(validation);
// APP CODE //
app.use(errorHandler);

app.get('/', (req, res) => {
  res.send("Hello, world!");
});

module.exports = app;