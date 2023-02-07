const Paper = require("../models/Paper");

const getPaper = async (paper) => {
  const foundPaper = await Paper.findOne({ paperName: paper });
  return foundPaper;
};

const getAllPapers = async () => {
  const result = await Paper.find();
  return result;
};

const createPaper = async (paperName) => {
  const foundPaper = await Paper.findOne({ paperName: paperName });
  if (!foundPaper) {
    const newPaper = new Paper({ paperName });
    try {
      newPaper.save();
      return "paper created";
    } catch (error) {
      return error;
    }
  } else {
    return "Paper already exist";
  }
};

const addQuestionToPaper = async (paperName, question) => {
  const findPaper = await Paper.findOne({ paperName: paperName });
  if (findPaper) {
    try {
      findPaper.questions.push(question);
      findPaper.save();
      return "question added to paper";
    } catch (err) {
      return err;
    }
  }
};

const addStudentToPaper = async (studentMat, paper) => {
  const foundPaper = await Paper.findOne({ paperName: paper });
  if (foundPaper) {
    try {
      
      foundPaper.students.push(studentMat);
      foundPaper.save();
      return "student Added to paper";
    } catch (error) {
      return error;
    }
  } else {
    return "Student not added";
  }
};

module.exports = {
  getPaper,
  createPaper,
  addQuestionToPaper,
  getAllPapers,
  addStudentToPaper,
};
