const userModel = require("../models/User.js");

module.exports.createOneUser = async (req, res) => {
  const {
    name,
    lastName,
    email,
    password,
    region,
    imageUrl,
    phoneNumber,
  } = req.body;
  try {
    const user = userModel.create({
      name,
      lastName,
      email,
      password,
      region,
      imageUrl,
      phoneNumber,
    });
    res.send(user);
  } catch (err) {
    res.send(err);
    // console.log(err);
  }
};

module.exports.findAll = async (req, res) => {
  try {
    const user = await userModel.find({});
    res.send(user);
  } catch (err) {
    res.send(err);
  }
};
