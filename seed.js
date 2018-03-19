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
    // FirstName: "Terrence",
    LastName: "Goku",
    email: "student3@gmail.com",
    password: "789"
  }
];


var courses = [
  {
    name: "Class 1",
    description: "Awesome class about tech",
    category: "Web"
  },
  {
    name: "Class 2",
    description: "Awesome class about Illustrator",
    category: "Digital Arts"
  },
  {
    name: "Class 3",
    description: "Awesome class about managing group",
    category: "Leadership"
  },
  {
    name: "Class 4",
    description: "Awesome class about React",
    category: "Web"
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
