var express = require("express");
var bodyParser = require("body-parser");

const connection = require("./Database/config.js");
const userRouter = require("./Database/routers/UserRouter.js");

var app = express();
var PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", express.static("dist/redField"));
app.use("/", userRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
