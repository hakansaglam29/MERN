const User = require("../models/UserModel");
const validator = require("express-validator");  // validate
const bcrypt = require("bcrypt");  // crypto method added


exports.authRegister = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // TODO1: Validate the fields
  
  const validationErr = validator.validationResult(req);

  if (validationErr.errors.length > 0) {
    return res.status(400).json(validationErr.array().map((err)=>(
        err.msg
    )));
  }

  const userData =  await User.findOne({ email });  // check already registered (email)

  if (userData) {  // check already registered (email)
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