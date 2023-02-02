const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: String,
  matNo: String,
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student