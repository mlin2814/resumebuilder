console.log("jobs_controllers.js is connected!")
var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {

  res.send('First page redirects to /jobs, using the application_controllers.js, which routes to the jobs_controller.js');
});




module.exports = router;


