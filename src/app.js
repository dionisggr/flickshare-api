require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morganLogger = require('./loggers/morgan-logger');
const errorHandler = require('./error-handlers/error-handler');
// const { authorization } = require('./helpers/validation');
const UserRouter = require('./routers/user-router');
const ListRouter = require('./routers/list-router');
const MovieRouter = require('./routers/movie-router');
const AdminRouter = require('./routers/admin-router');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morganLogger);
app.use(express.json());

// app.use(authorization);
app.use('/api/users', UserRouter);
app.use('/api/lists', ListRouter);
app.use('/api/lists', MovieRouter);
app.use('/api/admin', AdminRouter);
app.use(errorHandler);

module.exports = app;