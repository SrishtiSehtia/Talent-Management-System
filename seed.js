var db = require('./models');

var students = [
  {
    FirstName: "DJ",
    LastName: "JD",
    email: "student1@gmail.com",
    password: "123"
  } ,
  {
    FirstName: "Halim",
    LastName: "Apple",
    email: "student2@gmail.com",
    password: "456"
  } ,
  {
    FirstName: "Terrence",
    LastName: "Goku",
    email: "student3@gmail.com",
    password: "789"
  }
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
    console.log("created"+all_students.length+ "students");
}
    // console.log("Created new ", project._id)
  });
});
