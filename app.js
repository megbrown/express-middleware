"use strict";

let express = require('express');
let app = express();
require('dotenv').config();

let routes = require('./routes/');

app.use(logParams);
app.use(`/api/v1/`, routes);

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