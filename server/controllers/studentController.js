const Student = require("../models/Student");

const createStudent = async (studentName, studentMat) => {
  const foundUser = await Student.findOne({ studentMat: studentMat });
  if (!foundUser) {
    const newUser = new Student({ studentName, studentMat });
    try {
      await newUser.save();
      return true;
    } catch (error) {
      return error;
    }
  } else {
    return false;
  }
};

const updateUser = () => {};

const deleteUser = () => {};

const getStudent = async (matNo) => {
  const user = await Student.findOne({ studentMat: matNo });
  return user;
};

const addAnswerToStudent = async (studentMat, answers) => {
  const student = await Student.findOne({ studentMat: studentMat });
  if (student) {
    try {
      if (student.answers == []) {
        student.answers.push(answers);
      } else {
        student.answers = [];
        student.answers.push(answers);
      }
      student.save();
      return "answer save";
    } catch (error) {
      return error;
    }
  }
};

module.exports = {
  createStudent,
  updateUser,
  deleteUser,
  getStudent,
  addAnswerToStudent,
};
