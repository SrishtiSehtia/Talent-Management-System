
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var expressLayouts = require('express-ejs-layouts');


//Init App
var app = express();

app.use(expressLayouts);

//Load View Engine
app.set('views', __dirname + '/views');
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
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
