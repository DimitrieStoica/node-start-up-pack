var app      = require('./index');
var config   = require('./config/config');
var bole     = require('bole');
var mongoose = require('mongoose');

bole.output({level: "debug", stream: process.stdout});
var log = bole("server");
log.info({env: process.env.NODE_ENV}, "Server process starting");

mongoose.connect(config.dbURL);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'A connection error has occurred:'));
db.once('open', function (callback) {
  log.info("Server connected to: " + config.dbURL);
});

app.listen(config.express.port, config.express.ip, function(error) {
  if(error) {
    log.error("Unable to listen for connections", error);
    process.exit(10);
  }
  log.info("Server is listening on http://" +
  config.express.ip + ":" + config.express.port);
});
