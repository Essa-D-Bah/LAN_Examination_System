const express = require("express");
const http = require("http");
const socket = require("socket.io");
const cors = require("cors");
const mongoose = require("mongoose");
const {
  createStudent,
  getStudent,
  addAnswerToStudent,
} = require("./controllers/studentController");

const {
  getPaper,
  getAllPapers,
  createPaper,
  addQuestionToPaper,
  addStudentToPaper,
} = require("./controllers/paperController");

const Paper = require("./models/Paper");

const app = express();

app.use(cors());

const server = http.createServer(app);
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("We have a new connection");

  socket.on("join", async ({ paperName, studentMat }) => {
    const foundPaper = await Paper.findOne({ paperName: paperName });
    if (foundPaper) {
      const inc = foundPaper.students.includes(studentMat);
      if (inc) {
        const questions = foundPaper.questions;
        socket.emit("getPaper", { questions });
      }
    }
  });

  socket.on("getUser", async ({ serMat }) => {
    const user = await getStudent(serMat);
    console.log(user);
  });

  socket.on("signIn", ({ userName, password }) => {
    // console.log(userName, password);
    socket.emit("adminExist", { exist: true });
  });

  socket.on("addPaper", async ({ paper }) => {
    const res = await createPaper(paper);
  });

  socket.on("addStudent", async ({ studentData }) => {
    let { studentName, studentMat, paper } = studentData;
    let userCreated = await createStudent(studentName, studentMat);
    if (userCreated) {
      const addStu = await addStudentToPaper(studentMat, paper);
      socket.emit("studentAdded", { addStu });
    }
  });

  socket.on("addQuestion", async ({ question }) => {
    const { paperName, ...other } = question;
    const res = await addQuestionToPaper(paperName, other);
    socket.emit("questionAdded", { res });
  });

  socket.on("getAllPapers", async () => {
    const papers = await getAllPapers();
    socket.emit("sendPapers", { papers });
  });

  socket.on("addAnswer", async ({ answers, studentMat }) => {
    console.log(answers, studentMat);
    const res = await addAnswerToStudent(studentMat, answers);
    console.log(res);
  });

  socket.on("disconnect", () => {
    console.log("User have left");
  });
});

const CONNECTION_URL = "mongodb://localhost:27017/exam";
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false);
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    server.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));
