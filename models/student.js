var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    // passportLocalMongoose = require('passport-local-mongoose');

var StudentSchema = new Schema({
  FirstName: String,
  LastName: String,
  email: String,
  password: String,
  role: String
});

// StudentSchema.plugin(passportLocalMongoose);

var Student = mongoose.model('Student', StudentSchema);
module.exports = Student;
