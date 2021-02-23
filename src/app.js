require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morganLogger = require('./loggers/morgan-logger');
const errorHandler = require('./error-handlers/error-handler');
const { authorization } = require('./helpers/validation');
const LandingRouter = require('./routers/landing-router');
const UserRouter = require('./routers/user-router');
const ListRouter = require('./routers/list-router');
const MovieRouter = require('./routers/movie-router');
const AccessRouter = require('./routers/access-router');

const app = express();

app.use(helmet());
app.use(cors({
  origin: 'https://flickshare-client.vercel.app/'
}));
app.use(morganLogger);
app.use(express.json());

app.use('/', LandingRouter);
app.use('/api/users', authorization, UserRouter);
app.use('/api/lists', authorization, ListRouter);
app.use('/api/movies', authorization, MovieRouter);
app.use('/api', authorization, AccessRouter);
app.use(errorHandler);

module.exports = app;