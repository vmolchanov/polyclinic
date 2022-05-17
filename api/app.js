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
app.use(cors({
  credentials: true,
  origin: 'http://localhost:8080'
}));
app.use('/api', router);
app.use(errorMiddleware);

module.exports = app;
