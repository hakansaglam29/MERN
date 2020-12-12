const User = require("../models/UserModel");
const bcrypt = require("bcrypt");  // crypto method added
exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // TODO1: Validate the fields

  // TODO2: check already registered (email)
  const userData =  await User.findOne({ email });

  if (userData) {
    return res.status(400).json({error: [{message: "user already exist !!"}]});
  }

  const salt = await bcrypt.genSalt(10);  // crypto method added
  const newPassword = await bcrypt.hash(password, salt); // crypto method added



  const user = new User({
    firstName,
    lastName,
    email,
    password: newPassword, // crypto method added
  });
  await user.save();
  //TODO: Error handling for saving
  res.send("Register Completed.");
};
exports.authLogin = (req, res) => {
  // TODO: Auth.
  // TODO: Login func.
  res.send("Login Completed");
};