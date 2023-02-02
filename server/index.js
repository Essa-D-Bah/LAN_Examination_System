const express = require("express");
const http = require("http");
const socket = require("socket.io");
const cors = require("cors");
const mongoose = require("mongoose");
const { createUser, getUser } = require("./controllers/userController");

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

  socket.on("join", async ({ name, matNo }, callback) => {
    let res = await createUser(name, matNo);
    socket.emit("createUser", { res });
  });

  socket.on("getUser", async ({ serMat }) => {
    const user = await getUser(serMat);
    console.log(user);
  });

  socket.on("signIn", ({ userName, password }) => {
    console.log(userName, password);
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
