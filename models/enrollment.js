var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  Student = require('./student');
  Course = require('./course');

var EnrollmentSchema = new Schema({
  course: { type: Schema.Types.ObjectId, ref: 'Course' },
  student: { type: Schema.Types.ObjectId, ref: 'Student' },
});

var Enrollment = mongoose.model('Enrollment', EnrollmentSchema);
module.exports = Enrollment;
