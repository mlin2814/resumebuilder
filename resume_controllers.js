var express = require('express');
var router = express.Router();
var resume = require('../models')["index"];

router.get('/', function (req, res) {
	res.redirect('/resume');
});

router.get('/resume', function (req, res) {
	resume.findAll().then(function (resume_data) {
		return res.render('index', {resume_data});
	});
	
});

router.post('/resume/create',function(req,res){
  	resume.create({name: req.body.name})
  .then(function() {
    res.redirect('/');
  })
});

router.put('/resume/update', function (req, res) {
	resume.findOne({where:{id: req.body.resume_id}})
    .then(function(resume){
        return resume.updateAttributes({
            Selected: false
        }).then(function(){
            res.redirect('/');
        })
    });
});

module.exports = router;
