var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/talent_management_system");
console.log(mongoose.connection.readyState);

module.exports.Student = require("./student");
module.exports.Course = require("./course");
module.exports.Enrollment = require("./enrollment");
