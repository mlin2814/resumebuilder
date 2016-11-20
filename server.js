// Dependencies
// ============
var express = require('express');
//var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
// Our model controllers (rather than routes)

var application_controller = require('./controllers/application_controllers');
var jobs_controller = require('./controllers/jobs_controllers');
var users_controller = require('./controllers/users_controllers');
//var organization_controller = require('./controllers/organization_controller');

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

console.log("Server.js is connected!")

app.use('/', application_controller);
// console.log("before jobs")
app.use('/jobs', jobs_controller);
app.use('/users', users_controller);
//app.use('/organization', organization_controllers);

// console.log("here2")

// we bring in the models we exported with index.js
var models = require("./models");

// we sync the models with our db 
// (thus creating the apropos tables)

// MIKE COMMENTED THIS OUT
// models.sequelize.sync().then(function () {


// Sync our models
models.sequelize.sync({force:true}) 
// {force:true} drops the table everytime the server starts.

// MIKE ADDED (SET FOREIGN KEY CHECKS
// var sequelizeConnection = models.sequelize;
// sequelizeConnection.query('SET FOREIGN_KEY_CHECKS = 0')

// Create our Users in a .then callback
// ================================================
// MIKE ADDED 3 THEN FUNCTIONS...
.then(function(){

	return models.User.create({
		    facebookId: "111",
   		  firstName: "James",
    	  lastName: "Smith",
    	  zipCode: "90210",
    	  jobType: "Driver",
    	  interests: "Golf"})
                            })

.then(function(){

  return models.Organization.create({
      OrganizationName: "PETA",
      pocName: "POC NAME",
      pocPosition: "POC POSITION",
      phoneNumber: "123-456-7890",
      eMail: "PETA@gmail.com",
      webSite: "www.peta.com",
      zipCode: "08840"
                            })
              })

/* THIS SHOULD ADD DATA, BUT IS NOT WORKING RIGHT NOW. THERE IS SOME PROBLEM WITH THE OrganizationId.

.then(function(){

  return models.Jobs.create({
      title: "Intern",
      desc: "Description of Job: This is a description of the volunteer position",
      time: "9-5",
      jobZipCode: "08840",
      hours: "8",
      OrganizationId: "5"
                            })
              })
*/


// we set the port of the app
app.set('port', process.env.PORT || 3000);
	// set our app to listen to the port we set above
  var server = app.listen(app.get('port'), function() {
  	// then save a log of the listening to our debugger.
    console.log('Express Server Listening on port ' + server.address().port);
  });
