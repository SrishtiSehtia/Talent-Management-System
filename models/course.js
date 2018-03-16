var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var CourseSchema = new Schema({
     name: String,
     description: String,
     category: String,
});

var Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
