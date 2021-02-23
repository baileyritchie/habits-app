const createError = require('http-errors');
const login = require('../services/login');
const register = require('../services/register');

async function setLogin(req,res) {
  let {message,token} = await login(req.body);

  if (!token || message !== 'success') {
    throw createError(401,message);
  }
  res
    .cookie("token", token, {
    httpOnly:true});
  res.send({message});
}
// bobby
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjAzNTdjODFiZTk1NDYxM2EwNTFiYTY5IiwiaWF0IjoxNjE0MTE4MDE4fQ.Uk0x64ql3YQjYnljmV94MywBhhqgwrq5qJOtc-otGNU
async function setRegister(req,res) {
  let {message,token} = await register(req.body);

  if (!token || message !== 'success') {
    // no token returned from the service
    throw createError(400,message);
  }
  res.cookie("token",token, {
    httpOnly:true,
    secure:true,
    sameSite:"none"
  });
  res.send({message});
}
async function setLogout(req,res) {
  /* simply remove the cookie */
  res.cookie("token","",{
    httpOnly:true,
    expires: new Date(0)
  }).send({message:"success"});
}

module.exports = {
  setLogin,
  setRegister,
  setLogout
}