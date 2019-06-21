'use strict';
const express = require('express');
const cors = require('cors');
const catRouter = require('./cat/cat-router');
const dogRouter = require('./dog/dog-router');
const {CLIENT_ORIGIN } = require('./config');

const app = express();
app.use(cors({
  origin: CLIENT_ORIGIN
}));


app.use('/api/cats', catRouter);
app.use('/api/dogs', dogRouter);

app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

module.exports = app;