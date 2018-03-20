var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  Student = require('./student'),
  Course = require('./course');




var EnrollmentSchema = new Schema({
  _course: { type: Schema.Types.ObjectId, ref: 'Course' },
  _student: { type: Schema.Types.ObjectId, ref: 'Student' },
});

var Enrollment = mongoose.model('Enrollment', EnrollmentSchema);
module.exports = Enrollment;

// var enrollment = db enrollment

// set student, to student id
// class to classId
// and then just save it

//


//association to the class and not being embeded
//embebeded
//
