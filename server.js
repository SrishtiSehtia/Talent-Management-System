
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var expressLayouts = require('express-ejs-layouts');


var db = require("./models"),
    Student = db.Student,
    Course = db.Course;

//Init App
var app = express();

app.use(expressLayouts);

//Load View Engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// Home Route
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get("/students", function (req, res) {
  Student.find(function (err, allStudents) {
    if (err) {
      res.status(500).json({ error: err.message, });
    } else {
      console.log(allStudents);
      res.render("index", { students: allStudents});
    }
  });
});

app.get('/signup', function(req, res) {
  res.render('signup');
});

app.get('/login', function(req, res) {
  res.render('login');
});

// API ROUTES
app.get('/api/students', function (req, res) {
  console.log("I work")
  Student.find()
  .exec(function(err, allStudents){
    if (err) {return console.log("index error:" + err); }
    res.json(allStudents);
  });
});

// Server Started
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
