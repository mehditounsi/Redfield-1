const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/redField", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", function () {
  console.log("connected");
});

module.exports = connection;
