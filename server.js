'use strict';

const express = require('express');
const app = express();

let theCount = 1000;

app.use(express.static('public'));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://cors-friend-server.glitch.me');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});
 
app.get("/the-count", (req, res) => {
  console.log('incrementing the count');
  theCount += 1;
  console.log(`the count is ${theCount}`);
  res.json({count: theCount});
});

// listen for requests and log when you've started doing it
app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080}`));
