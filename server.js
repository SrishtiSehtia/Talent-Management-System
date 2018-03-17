
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var expressLayouts = require('express-ejs-layouts');


var db = require("./models"),
    Student = db.Student,
    Course = db.Course;

//Init App
var app = express();

app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true}));
//Load View Engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Home Route
app.get("/", function (req, res) {
  Student.find(function (err, allStudents) {
    if (err) {
      res.status(500).json({ error: err.message, });
    } else {
      console.log(allStudents);
      res.render("index", { students: allStudents});
    }
  });
});

//Add Route
app.get('/signup', function(req, res) {
  res.render('signup');
});

//Add Route
app.get('/login', function(req, res) {
  res.render('login');
});

//create a student
app.post('/api/students', function(req, res){
//this is model that both creates and saves the student model
  Student.create({
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role,
  },function (err, student){//this will give us an error if anything goes wrong
    if(err){
      res.status(500);// response for an error
    }
    res.status(200).json(student);//response for success
  });
});

app.put('/api/students/:id', function(req, res){
  console.log('i am here');
  var studentId = req.params.id;
  Student.findOne({_id: studentId},function (err, currentStudent){
    if(err){
      res.status(500).json("user doesnt exist");
    }
    console.log(currentStudent);
    currentStudent.FirstName = req.body.FirstName || currentStudent.FirstName;
    currentStudent.LastName = req.body.LastName || currentStudent.LastName;
    currentStudent.email = req.body.email || currentStudent.email;
    currentStudent.password = req.body.password || currentStudent.password;
    currentStudent.role = req.body.role || currentStudent.role;
    console.log(currentStudent);
    currentStudent.save(function(err,updated){
      if(err){
        res.status(500).json("user cant be updated");
        throw err;
      }
      console.log(updated);
      res.status(200).json(updated);
    });
  });
});

app.delete('/api/students/:id', function(req, res){
  console.log('student deleted', req.params);
  var studentId = req.params.id;
  Student.findOneAndRemove({_id: studentId},function (err, deletedStudent){
    if(err){
      res.status(500);
    }
      res.status(200).json(deletedStudent);
  });
});


// API ROUTES
//get all students
app.get('/api/students', function (req, res) {
  console.log("I work")
  Student.find()
  .exec(function(err, allStudents){
    if (err) {return console.log("index error:" + err); }
    res.json(allStudents);
  });
});

// one students
app.get('/api/students/:id', function (req, res){
  console.log("one student");
  Student.findOne({_id: req.params.id }, function(err, data){
    res.json(data);
  });
});



// Server Started
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
