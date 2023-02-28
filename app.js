require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const { errors } = require('celebrate');
const routes = require('./routes/index');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const limiter = require('./middlewares/limiter');
const errorHandler = require('./middlewares/errorHandler');
const cors = require('./middlewares/cors');
const { DEFAULT_CONFIG } = require('./utils/config');

const { DB_URL, PORT } = DEFAULT_CONFIG;

const app = express();

mongoose.connect(DB_URL)
  .then(() => {
    console.log(`App is connected to database on URL ${DB_URL}`);
  })
  .catch((err) => {
    console.log(`Error connecting to database on URL ${DB_URL}`);
    console.error(err);
  });

app.use(helmet());
app.use(requestLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter);
app.use(cors);

app.use(routes);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
