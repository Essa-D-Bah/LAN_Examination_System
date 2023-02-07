const mongoose = require("mongoose");

const paperSchema = new mongoose.Schema({
  paperName: { type: String, required: true },
  questions: [],
  students: [{ type:String}],
});

const Paper = mongoose.model("Paper", paperSchema);
module.exports = Paper;
