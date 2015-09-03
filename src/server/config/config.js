var config     = module.exports;
var currentENV = process.env.NODE_ENV || "development";
var PRODUCTION = process.env.NODE_ENV === "production";
var TEST       = process.env.NODE_ENV === "test";

config.express = {
  ip:   process.env.VCAP_APP_HOST || "127.0.0.1",
  port: process.env.PORT || 3000
};

config.mongodb = {
  port: process.env.MONGODB_PORT || 27017,
  host: process.env.MONGODB_HOST || "localhost",
  db:   process.env.MONGODB_DATABASE || "demo"
};

if (PRODUCTION) {
  config.express.ip   = process.env.VCAP_APP_HOST || "0.0.0.0";
  config.express.port = process.env.VCAP_APP_PORT || 80;
};

if (TEST) {
  config.express.ip   = process.env.VCAP_APP_HOST || "localhost";
  config.express.port = process.env.EXPRESS_PORT || 4657;
};

config.dbURL = "mongodb://" + config.mongodb.host + ":" + config.mongodb.port +
  "/" + config.mongodb.db + "_" + currentENV;

config.currentENV = currentENV;
