
const createError = require('http-errors');
const jwt = require('jsonwebtoken');

function isAuth(req,res,next) {
  const token = req.cookies.token || '';
  try {
    if (!token) {
      throw createError(401,"Unauthorized");
    }
    const verified = jwt.verify(token,process.env.JWT_SECRET);
    req.user = verified.user;
    next();
  } catch (err) {
    throw createError(500, err.toString());
  }  
}

module.exports = isAuth;