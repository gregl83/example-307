var express = require('express');
var router = express.Router();
var config = require('config');
var Response = require('api-res');


var destination = config.get('destination');


/* Redirect */
router.all('/', function(req, res, next) {
  // redirect server sets header
  res.append('O-Cookie', 'apollo=thirteen');

  // redirect server sets cookie
  res.cookie('apollo', 'thirteen');

  res.redirect(307, destination);
});


/* Destination */
router.all('/results', function(req, res, next) {
  var response = new Response();

  var meta = {
    headers: req.headers,
    cookies: req.cookies,
    query: req.query
  };

  response.meta(meta);

  response.data(req.body);

  res.json(response);
});


module.exports = router;