// mongoose.promise = global.promise;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  region: String,
  imageUrl: String,
  phoneNumber: Number,
  // comments: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "comment",
  //   },
  // ],
  // demands: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "demand",
  //   },
  // ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
