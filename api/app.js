const express = require('express');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const router = require('./router');
const {errorMiddleware} = require('./middlewares/error');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

const whitelist = [
  'http://localhost:8080',
  'http://localhost:3000'
];

app.use(cors({
  credentials: true,
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}));
app.use('/api', router);
app.use(errorMiddleware);

module.exports = app;
