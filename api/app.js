const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('./router');
const {errorMiddleware} = require('./middlewares/error');
const config = require('./config');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

app.use(cors({
  credentials: true,
  origin: (origin, callback) => {
    if (config.corsWhitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}));
app.use('/api', router);
app.use(errorMiddleware);

module.exports = app;
