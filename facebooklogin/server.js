// EXPRESS SERVER
var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// Code for server functions goes here <---|

// THIS LOGIN WORKS DIRECTLY WITH FACEBOOK
// app.get('/', function (req, res) {
// 	// res.send('Welcome to the Star Wars Page!')
// 	res.sendFile(path.join(__dirname, '/indexfacebook.html'));
// });


// THIS LOGIN PASSES THROUGH BOTH FACEBOOK AND FIREBASE FOR LOGIN
app.get('/', function (req, res) {
	// res.send('Welcome to the Star Wars Page!')
	res.sendFile(path.join(__dirname, '/indexfirebasefacebook.html'));
});


//EXPRESS LISTENER 
//===============================================================
app.listen(PORT, function (){
   console.log('App listening on PORT ' + PORT);
});