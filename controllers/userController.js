const createError = require('http-errors');
const login = require('../services/login');
const register = require('../services/register');
const isLoggedIn =  require('../services/isLoggedIn');

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

async function setRegister(req,res) {
  let {message,token} = await register(req.body);

  if (!token || message !== 'success') {
    // no token returned from the service
    throw createError(400,message);
  }
  console.log("token is:", token);
  res
    .cookie("token", token, {
    httpOnly:true});
  res.send({message});
}
async function setLogout(req,res) {
  /* simply remove the cookie */
  try {
    console.log('logout attempted');
    res.clearCookie("token").send();
    /*res.cookie("token","",{
      httpOnly:true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
      path: '/'
    }).send();*/
  } catch (err) {
    throw createError(401, "Could not logout");
  }
}
async function getLoggedIn(req,res) {
  /* TO DO - send user id back as well */
  /* determine if user logged in based on cookie */
  const token = req.cookies.token;
  if (!token) {
    res.send({auth:false});
  }
  const {message,userId} = await isLoggedIn(token);
  if (!userId) {
    throw createError(401,message);
  }
  console.log(userId.user);
  res.send({auth:true,id:userId.user});
}

module.exports = {
  setLogin,
  setRegister,
  setLogout,
  getLoggedIn
}