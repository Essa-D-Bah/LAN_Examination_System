const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  matNo: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = User
