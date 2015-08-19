var express = require('express');
var config  = require('./config/config');
var path    = require('path');
var app     = express();
var router  = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.disable('etag');

require('./lib/routes/home')(router,app);

app.use('/', router);

app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

module.exports = app;
