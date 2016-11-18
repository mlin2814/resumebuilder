// Dependencies
// ============
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

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

// var routes = require('./controllers/sequelizedBurger_controller.js');
// app.use('/', routes);


// var SequelizedBurger=require("./models")["sequelizedBurger"];
// SequelizedBurger.sync();//create a sequelizedBurger table



// we bring in the models we exported with index.js
var models = require("./models");

// we set the port of the app
app.set('port', process.env.PORT || 3000);


// we sync the models with our db 
// (thus creating the apropos tables)
models.sequelize.sync().then(function () {
	// set our app to listen to the port we set above
  var server = app.listen(app.get('port'), function() {
  	// then save a log of the listening to our debugger.
    console.log('Express server listening on port ' + server.address().port);
  });
});