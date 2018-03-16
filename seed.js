var db = require('./models');

var students = [
  {
    email: "student1@gmail.com",
    password: "123"
  }
  ,
  {
    email: "student2@gmail.com",
    password: "456"
  }
  ,
  {
    email: "student3#gmail.com",
    password: "789"
  }
]

db.Student.remove({}, function(err, students) {
  console.log('removed all students');
  db.Student.create(students, function(err, project){
    if (err){
      return console.log("Error:", err);
    }

    console.log('recreated all students');
    console.log("created", all_students.length, "students");

    // console.log("Created new ", project._id)
    process.exit(); // we're all done! Exit the program.
  });

});
