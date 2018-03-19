
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





// get Route
app.get('/courses', function(req, res) {
  Course.find(function (err, allCourses) {
    if (err){
      res.status(500).json({ error: err.message});
    } else {
      console.log(allCourses);
      res.render("index", { courses: allCourses});
    }
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

// get one students
app.get('/api/students/:id', function (req, res){
  console.log("one student");
  Student.findOne({_id: req.params.id }, function(err, data){
    res.json(data);
  });
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

//get all courses
app.get('/api/courses', function (req, res){
  console.log("I work for courses");
  Course.find()
  .exec(function(err, allCourses){
    if (err) {return console.log("index error:" + err); }
    res.json(allCourses);
  });
});

//get one course
app.get('/api/courses/:id', function (req,res){
  console.log("I work for one class");
  Course.find()
  Course.findOne({_id: req.params.id }, function (err, data) {
    res.json(data);
  })
})


// post
app.post('/api/courses', function(req, res){
  Course.create({
    Name:req.body.Name,
    Description:req.body.Description,
    Category: req.body.Category
    },function (err, course){
      if(err){
        res.status(500);
      }else
    res.status(200).json(course);
  });
});
//put
app.put('/api/courses/:id', function(req, res){
  var courseId = req.params.id;
  Course.findOne({_id: courseId}, function (err, currentCourse){
    if(err){
      res.status(500).json("Course doesnt exist");
    }
    currentCourse.Name =  req.body.Name || currentCourse.Name;
    currentCourse.Description = req.body.Description || currentCourse.Description;
    currentCourse.Category = req.body.Category || currentCourse.Category;

    currentCourse.save(function(err,updated){
      if(err){
        res.status(500).json("course can't be updated");
        throw err;
      }
      res.status(200).json(updated);
    });
  });
});
// delete

app.delete('/api/courses/:id', function(req, res){
  var courseId = req.params.id;
  Course.findOneAndRemove({_id: courseId}, function (err, deletedCourse){
    if(err){
      res.status(500);
    }
    res.status(200).json(deletedCourse);
  });
});


// Server Started
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
