var express = require('express');
var router = express.Router();
var config = require('config');
var Response = require('api-res');


var destination = config.get('destination');


/* Redirect */
router.all('/redirect', function(req, res, next) {
  res.redirect(307, destination);
});


/* Destination */
router.all('/destination', function(req, res, next) {
  var response = new Response();

  // todo collect data and set in response object

  res.json(response);
});


module.exports = router;