"use strict";

const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const tweetsApi = require('./api/tweets');
const db = require('./lib/db');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var onConnect = function (dbInstance) {
  app.use('/tweets', tweetsApi(dbInstance));
}

db.connect(onConnect);

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
