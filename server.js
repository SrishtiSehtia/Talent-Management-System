
var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var expressLayouts = require('express-ejs-layouts');


var db = require("./models"),
    Student = db.Student,
    Course = db.Course,
    Enrollment = db.Enrollment;

//Init App
var app = express();
app.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true}));


//Load View Engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Home Route
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});

app.get('/students', function (req, res) {
  console.log("hello student");
  Student.find(function (err, allStudents) {
    if (err) {
      res.status(500).json({ error: err.message, });
    } else {
      console.log(allStudents);
      Course.find(function (err, allCourses) {
        if (err){
          res.status(500).json({ error: err.message});
        } else {
          console.log(allCourses);
          console.log("Courses in index")
          res.render("index", { courses: allCourses, students: allStudents});
        }
      });
    }
  });
});

app.get('/join', function (req, res) {
  console.log("hello student");
  Enrollment.find(function (err, allEnrollment) {
    if (err) {
      res.status(500).json({ error: err.message, });
    } else {
      console.log(allEnrollment);

      Course.find(function (err, allCourses) {
        if (err){
          res.status(500).json({ error: err.message});
        } else {
          console.log(allCourses);
          console.log("Courses in index")
          res.render("join", { enrollment: allEnrollment, courses: allCourses});
        }
      });
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

// app.get('/courses', function(req, res) {
//   Course.find(function (err, allCourses) {
//     if (err){
//       res.status(500).json({ error: err.message});
//     } else {
//       console.log(allCourses);
//       res.render("index", { courses: allCourses});
//     }
//   });
// });


// //find all classes a student took
// db.Enrollment.find({_user: userID}, function(err, succ){
//   succ
//     .populate('class')
//     .exec(function(err, succ){
//
//     })
// })

// API ROUTES

//get all enrollment
app.get('/api/enrollments', function (req,res){
  console.log("I work for enrolment");
  Enrollment.find({}, (err, succ) => {res.json(succ);})
  // var userID = req.body.userId;
  // var courseId = req.body.courseId;
  // var crs_for_std = Enrollment.find({studentId});
  // var std_in_crs = Enrollment.find({courseId});
  // var addEnrollment = newEnrollment({courseID});
  // var dropEnrollment = Enrollment.remove({studentId})
});




// get all courses that a student has
// This route expects the student and course id to be included
app.get('/api/enrollments/students/:studentId', function(req,res){
  console.log("I work enrollment student");
  var studentId = req.params.studentId;
  Enrollment.find({_student: studentId}).populate('_course').exec(function(err,all){
    res.json(all);
  });
});
////////////////////////*******KAY********///////////////////////////////////
//get all students that in one course
app.get('/api/enrollments/courses/:courseId', function(req,res){
  console.log("I work enrollment course");
  console.log(courseId);
  var courseId = req.params.courseId;
  Enrollment.find({_course: courseId}).populate('_student').exec(function(err,all){
    res.json(all);
  });
});
//////////////////////////////////////////////////////////////////


//get all enrollment objects
app.post('/api/enrollments', function (req,res){
  // res.send("Apple");
  console.log("I work in creating enrollment list");
  Enrollment.create({
    _course: req.body.courseId,
    _student: req.body.studentId
  },function(err, succ){
    if(err,succ){
        res.status(500).send(err);
      }else
    // res.status(200).send(JSON.stringify(succ));
    res.status(200).json(succ);
   });
});


app.put('/api/enrollments/courses/:id'), function (rec, res){
  console.log("Creating a new ");
}


//delete enrollment
app.delete('/api/enrollments/:id', function(req, res){
  console.log('enrollment deleted', req.params);
  var enrollmentId = req.params.id;
  Enrollment.findOneAndRemove({_id: enrollmentId}, function(err, deletedEnrollment){
    if(err){
      res.status(500);
    }
    res.status(200).json(deletedEnrollment)
  });
});


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

//update student
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


//delete student
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


//create one course
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


//update course
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


// delete a course
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
