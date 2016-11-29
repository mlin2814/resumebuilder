var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
	console.log("jjjjooooobbbbb    "+ req.session.email)
	var zipCodeVar=req.session.zipCode;

	models.Jobs.findAll({
		include: [ models.Organization ],
		where: {jobZipCode: zipCodeVar}
	}).then(function(data){

		var hbsObject = {jobs: data};
		console.log(JSON.stringify(data[1]));
		res.render('index', hbsObject)
	})
});

module.exports = router;


