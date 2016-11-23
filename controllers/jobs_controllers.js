var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
	console.log("jjjjooooobbbbb    "+ req.session.email)
	var zipCodeVar=req.session.zipCode;
	var zipCodeVar='08840';

	models.Jobs.findAll({
		include: [ models.Organization ],
		where: {jobZipCode: zipCodeVar}
	}).then(function(data){

		res.json(data);
	})



	// models.User.findOne({
 //    where: {email: req.session.email}
 //  }).then(function(user){
	// 		console.log(user.zipCode);
 //  			models.Jobs.findAll({
 //    		include: [models.Organizations],
 //  			where: {jobZipCode: user.zipCode}
 //  			}) .then(function(jobAll) {
 //  					res.json(jobAll);
 //  		})
 //  	});
});

module.exports = router;


