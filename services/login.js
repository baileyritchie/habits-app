const User = require("../model/User");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function login(user){
  const {email,password} = user;
  if (!email || !password) {
    return {message: "Please enter all required fields"};
  }

  const existingUser = await User.findOne({email})

  if (!existingUser) {
    return {message: "Invalid Login Credentials"};
  }

  const passswordCorrect = await bcrypt.compare(password,existingUser.passwordHash);
  if (!passswordCorrect) {
    return {message: "Invalid Login Credentials"};
  }

  const token = jwt.sign({
    user: existingUser._id
    },process.env.JWT_SECRET);
  return {message:"success",token};
}

module.exports = login;