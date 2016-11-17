var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//==========================================================

var mysql      = require('mysql');
var connection;
if (process.env.JAWSDB_URL){
var connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'burgers_db'
});
}

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };

  console.log('MySQL Connected: id ' + connection.threadId);

})

//==========================================================

// SELECT * FROM burgers; Print to index.handlebars
app.get('/', function(req,res) {
    connection.query('SELECT * FROM burgers;', function(err, data) {
      if (err) throw err;
    dataOne = [];
    dataTwo =[];
    for(var i=0;i<data.length;i++){
      
      if(data[i].devoured == '0'){
        dataOne.push(data[i]);
      }
      else if(data[i].devoured == '1'){
        dataTwo.push(data[i]);
      }
    }
    console.log(dataOne);
    console.log(dataTwo);
    res.render('index', {placeholder : dataOne, placeholderTwo : dataTwo});
    });
});

// POST POST POST POST
app.post('/create', function (req, res) {
  connection.query('INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)', [req.body.burgerInput, req.body.boolean], function (err, result) {
    if (err) throw err;
    res.redirect('/');
  });
});

// UPDATE UPDATE UPDATE UPDATE
app.put('/update', function(req,res){
connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [ req.body.boolean, req.body.id], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
});

// DELETE DELETE DELETE DELETE
app.delete('/delete', function(req,res){
connection.query('DELETE FROM burgers WHERE id = ?', [req.body.id], function(err, result) {
      if (err) throw err;
      res.redirect('/');
    });
});



//EXPRESS LISTENER 
//===============================================================
var PORT = process.env.PORT || 3000;

app.listen(PORT, function (){
   console.log('App Listening: PORT ' + PORT);
});
