const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  studentName: {
    type:String,
    require:true
  },
  studentMat: {
    type:String,
    require:true
  },
  answers:[]
});

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
