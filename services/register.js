const User = require("../model/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function register(user) {
  let {name,email,password,passwordVerify} = user;

  if (!name || !email || !password || !passwordVerify) {
    return {message: 'Please enter all required fields'};
  }
  if (password.length < 6) {
    return {message: 'Please enter a password with at least 6 characters.'};
  }
  if (password !== passwordVerify) {
    return {message: "Please enter the same password twice."};
  }

  const existingUser = await User.findOne({email}); // check to see if a user by that email exists
  if (existingUser) {
    return {message: "An account with this email already exists"}
  }
  //hash the password
  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password,salt);

  // save a new user account
  const newUser = new User({
    name,
    email,
    passwordHash
  });

  const savedUser = await newUser.save();

  const token = jwt.sign({
    user: savedUser._id
  },process.env.JWT_SECRET);

  return {message:"success",token};
}

module.exports = register;