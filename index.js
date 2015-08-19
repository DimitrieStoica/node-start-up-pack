var express = require('express');
var config  = require('./config/config');
var path    = require('path');
var app     = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.disable('etag');

app.get('/', function(req, res){
  res.send('Hello there ! \n');
});

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

module.exports = app;
