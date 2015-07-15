var express = require('express');
var router = express.Router();
var request = require('request');
var Response = require('api-res');


/* Redirect */
router.all('/redirect', function(req, res, next) {
  // todo 307 redirect
});


/* Destination */
router.all('/destination', function(req, res, next) {
  var response = new Response();

  // todo collect data and set in response object

  res.json(response);
});


module.exports = router;