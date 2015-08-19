var routes = function(router, app) {

  router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PATCH, POST, GET, PUT, DELETE, OPTIONS");
    if ('OPTIONS' === req.method) {
      return res.send(200);
    }
    next();
  });

  router.get('/', function(req, res) {
    res.send('Hello world! \n');
  });
}

module.exports = routes;
