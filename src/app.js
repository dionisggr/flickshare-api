require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morganLogger = require('./loggers/morgan-logger');
const errorHandler = require('./error-handlers/error-handler');
const { authorization } = require('./helpers/validation');
const UserRouter = require('./routers/user-router');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morganLogger);
app.use(express.json());

// app.use(authorization);
app.use(UserRouter);
app.use(errorHandler);

module.exports = app;