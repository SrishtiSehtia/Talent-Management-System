var db = require('./models');

var students = [
  {
    FirstName: "DJ", LastName: "JD", email: "student1@gmail.com",
    password: "123"
  } ,
  {
    FirstName: "Halim", LastName: "Apple", email: "student2@gmail.com",
     password: "456"
  } ,
  {
    FirstName: "Gohan",LastName: "Go", email: "student3@gmail.com",
    password: "789"
  },
  {
    FirstName: "Tomas",LastName: "Vargas", email: "student3@gmail.com",
    password: "789"
  },
  {
    FirstName: "Luis",LastName: "Vargas", email: "student3@gmail.com",
    password: "789"
  },
  {
    FirstName: "Desiree",LastName: "Leader", email: "student3@gmail.com",
    password: "789"
  },
  {
    FirstName: "Ania",LastName: "LCF", email: "student3@gmail.com",
    password: "789"
  },
  {
    FirstName: "Srishti",LastName: "Good", email: "student3@gmail.com",
    password: "789"
  },
];


var courses = [
  {
    Name: "Class 1",
    Description: "Awesome class about tech",
    Category: "Web"
  },
  {
    Name: "Class 2",
    Description: "Awesome class about Illustrator",
    Category: "Digital Arts"
  },
  {
    Name: "Class 3",
    Description: "Awesome class about managing group",
    Category: "Leadership"
  },
  {
    Name: "C++",
    Description: "Awesome class about React",
    Category: "Web"
  },
];

var enrollment = [
  {
    courseId: "1",
    studentId: "Apple"
  },
  {
    courseId:"2",
    studentId: "Orange"
  },
  {
    courseId:"3",
    studentId:"Bannan"
  },
];

db.Student.remove({}, function(err, removed) {
  if(err){
    throw err;
  }
  console.log('removed all students');
  db.Student.create(students,function(err, all_students){
    if (err){
      return console.log("Error:", err);
    }
    else{
      console.log('students    '+all_students );
      console.log('recreated all students');
      console.log("created "+all_students.length+ " students");
}
    // console.log("Created new ", project._id)
  });
});

db.Course.remove({}, function(err, removed) {
  if(err){
    throw err;
  }else{
    console.log(removed);
    console.log('removed all courses');
  db.Course.create(courses,function(err1, all_courses){
    if (err1){
      return console.log("Error:", err1);
      throw err1;
    }
    else{

      console.log('courses    '+all_courses );
      console.log('recreated all courses');
      console.log("created"+all_courses.length+ "");

    // console.log("Created new ", project._id)

}
});
  }

});


/////
db.Enrollment.remove({}, function(err, removed) {
  if(err){
    throw err;
  }
  console.log('removed all Enrollment');
  db.Enrollment.create(enrollment,function(err, all_enrollment){
    if (err){
      return console.log("Error:", err);
    }
    else{
      console.log('enrollment    '+all_enrollment);
      console.log('recreated all enrollment');
      console.log("created "+all_enrollment.length+ " enrollment");
}
    // console.log("Created new ", project._id)
  });
});

// student 0, id, with course 0 and id
