var config     = module.exports;
var currentENV = process.env.NODE_ENV || "development";
var PRODUCTION = process.env.NODE_ENV === "production";
var TEST       = process.env.NODE_ENV === "test";

config.express = {
  port: process.env.PORT || 3000,
  ip: process.env.VCAP_APP_HOST || "127.0.0.1"
};

if (PRODUCTION) {
  config.express.ip = process.env.VCAP_APP_HOST || "0.0.0.0";
  config.express.port = process.env.VCAP_APP_PORT || 80;
};

if (TEST) {
  config.express.port = process.env.EXPRESS_PORT || 4657;
  config.cf.app_url = "http://localhost:" + config.express.port;
  config.credentials = {
    cf_username: process.env.CF_USERNAME,
    cf_password: process.env.CF_PASSWORD
  };
};

config.currentENV = currentENV;
