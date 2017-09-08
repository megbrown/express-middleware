"use strict";

let express = require('express');
let app = express();
require('dotenv').config();

let routes = require('./routes/');

const logParams = (req, res, next) => {
  console.log('req.params', req.params );
  console.log('req.url from "logParams"', req.url );
  next();
};

app.use(logParams);

app.use(`/`, routes);

// app.use(express.static('./templates/'));

app.use( (req, res, next) => {
  let err = new Error('Not Found, dummy');
  err.status = 404;
  next("This got passed along");
});

app.use( (err, req, res, next) => {
  res.status( err.status || 500);
  res.json({
    message: "It's not working",
    err: err
  });
});

let port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});