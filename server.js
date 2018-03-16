var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var expressLayouts = require('express-ejs-layouts');


mongoose.connect('mongod://localhost/Talent-Management-System');
var db = mongoose.connection;

//Init App
var app = express();

app.use(expressLayouts);

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Home Route
app.get('/', function(req, res) {
res.render('index');
});

//Add Route
app.get('/signup', function(req, res) {
res.render('signup');
});

//Add Route
app.get('/login', function(req, res) {
res.render('login');
});

// Server Started
app.listen(3000, function() {
  console.log('server started on port 3000....');
});
