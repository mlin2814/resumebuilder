console.log("application_controllers.js is connected!")
var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  res.redirect('/jobs');
});

module.exports = router;