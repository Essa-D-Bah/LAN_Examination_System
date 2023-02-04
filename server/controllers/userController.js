const Student = require("../models/Student");

const createStudent = async (name, matNo) => {
  const foundUser = await Student.findOne({ matNo: matNo });
  if (!foundUser) {
    const newUser = new Student({ name, matNo });
    try {
      await newUser.save();
      return "User create";
    } catch (error) {
      return error;
    }
  } else {
    return "User already exist";
  }
};

const updateUser = () => {};

const deleteUser = () => {};

const getStudent = async (matNo) => {
  const user = await Student.findOne({ matNo: matNo });
  return user;
};

module.exports = { createStudent, updateUser, deleteUser, getStudent };
