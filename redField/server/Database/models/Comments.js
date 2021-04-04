const mongoose = require("mongoose");

// mongoose.promise = global.promise;
const commentSchema = new mongoose.Schema({
  desc: String,
  createdAt: { type: Date, default: Date.now },
  users: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const comment = mongoose.model("comment", commentSchema);
module.exports = comment;
