var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CourseSchema = new Schema({
     Name: String,
     Description: String,
     Category: String
});

var Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
