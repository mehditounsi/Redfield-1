const mongoose = require("mongoose");

// mongoose.promise = global.promise;
const demandSchema = new mongoose.Schema({
  title: String,
  desc: String,
  createdAt: { type: Date, default: Date.now },
  comments: [{ id: Schema.Types.ObjectId, ref: "Comment" }],
  users: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
});

const demand = mongoose.model("demand", demandSchema);
module.exports = demand;
