var db = require('./models');

var students = [
  {
    FirstName: "Srishti", LastName: "Sehtia", email: "student1@gmail.com",
    password: "123", role: "Student"
  } ,
  {
    FirstName: "Lesley", LastName: "Toche", email: "student2@gmail.com",
     password: "456", role: "Student"
  } ,
  {
    FirstName: "Terrence",LastName: "Langston", email: "student3@gmail.com",
    password: "789", role: "Student"
  },
  {
    FirstName: "Tomas",LastName: "Vargas", email: "student4@gmail.com",
    password: "789", role: "Student"
  },
  {
    FirstName: "Luis",LastName: "Vargas", email: "student5@gmail.com",
    password: "789", role: "Student"
  },
  {
    FirstName: "Stepahnie",LastName: "Corrales", email: "student6@gmail.com",
    password: "789", role: "Student"
  },
  {
    FirstName: "Anias",LastName: "Amaya", email: "student7@gmail.com",
    password: "789", role: "Student"
  },
  {
    FirstName: "Melisa",LastName: "Im", email: "student8@gmail.com",
    password: "789", role: "Student"
  },
  {
    FirstName: "Amber",LastName: "Gonzales", email: "student8@gmail.com",
    password: "789", role: "Student"
  },
];


var courses = [
  {
    Name: "DAT 1MP: Digital Music Production ",
    Description: "This three-day training in music production will walk members through recording and producing a track combining synthesized or sampled and acoustic sources, potentially including guitar, voice, and other instruments that members bring to the class. [M |3:15p-5:15p | 2/5,12,19]",
    Category: "DAT"
  },
  {
    Name: "DAT 1VR: VR with Google TiltBrush",
    Description: "Learn how to draw in 3D space using the Google TiltBrush App on the HTV VIVE virtual Reality headset. [M-Th | 12p-3p | 4/2-6]",
    Category: "DAT"
  },
  {
    Name: "DAT 3C: Directors Lab",
    Description: "Working off the script created in the screenwriter's lab, participants will learn how to creatively plan for a shoot, storyboard their work, create a shot list, work with Actors, and how to guide their crew to capture the shots needed. [W | 2/7 |4p-5:30p + Register for DAT 2EA on Thursdays.",
    Category: "DAT"
  },
  {
    Name: "DAT 3B: Producers Lab",
    Description: "Working off the script created in the screenwriter's lab, participants will learn how to breakdown a script, create a budget, create a production schedule, and plan and put on an audition for the Summer short film. [Th,F | 4p-5:30p | 2/8-4/26 ]",
    Category: "DAT"
  },
  {
    Name:"PPL 1: People for All",
    Description:"Let’s get the new year started right. Colleges and employers look for people who are great team members. In this training, you will learn how your personality and leadership style can help you be an effective team member, how to turn an idea into a plan of action, and how to think like a problem-solver. [Sat | 11a-3:00p | 2/17",
    Category:"PPL"
  },
  {
    Name:"PPL 2: Writing for Professional Settings ",
    Description:"Emails, letters, applications, résumés... we communicate through our writing in a wide variety of situations. In this series, you will learn how to tailor your writing skills to fit a variety of professional settings that you are beginning to face as you take the first steps in your career and education. You will walk away with a resumé, LinkedIn profile, and with the confidence that you can send a professional communication, no sweat. [W | 2p-3:30p | 2/28-3/28]",
    Category:"PPl"
  },
  {
    Name:"PPL EM: Event Unit Meetup ",
    Description:"Be part of the team that designs, plans, and manages events here at the NEST. Learn how to think critically, solve problems, and see a project through from beginning to end alongside of a supportive team. Past events coordinated by this team include holiday parties, game days, fashion shows, and movie screenings. What will our next event be? It’s up to you! [T | 4p-5p | 1/30-4/10]",
    Category:"PPL"
  },
  {
    Name:"WIT 1GD: Game Development",
    Description:"Develop your own 3D video games using Unity3D game engine. We will explore the many tools this software has to offer in an interactive way and learn the object-oriented C# coding language. Please note: A live video broadcast or transportation will be available to and from Salinas based on enrollment. [T,Th | 4p-6p | 2/13-4/5]",
    Category:"WIT"
  },
  {
    Name:"WIT GWC: Girls Who Code Meetup ",
    Description:"Join Girls Who Code, a supportive, fun group that helps you take the mystery out of tech and coding. As part of the learning experience, we will make an app for iPhone based on your ideas. Come to our first meeting on January 17, 2018 at 4pm at the Digital NEST. [ W| 4p-6p | 1/17-5/31]",
    Category:"WIT"
  },
  {
    Name:"WIT 1D: Beyond Searching: What can you do with all that data?",
    Description:"We have the ability to access a crazy amount of information at the palm of our hands and if you’re doing Google searches, you’re just scraping the surface of what you can do with information. Come learn how to answer more complex questions and about other things you can do, including teaching a computer how to recognize specific things in an image. [M | 4p-6p | 1/22-2/26]",
    Category:"WIT"
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
