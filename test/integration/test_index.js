var request = require('supertest');
var app     = require('../../index');

describe('home route', function(){
  describe('GET /', function(){
    it('should respond with 200 OK', function(done){
      request(app)
        .get('/')
        .expect(200, done);
    });
  });
});

