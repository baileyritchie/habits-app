const jwt = require('jsonwebtoken');

async function isLoggedIn(token){
  const result = {};
  jwt.verify(token,process.env.JWT_SECRET, (err,decoded) => {
    if (err) {
      result.message = err.toString();
    } else {
      result.message = "success";
      result.userId = decoded;
    }
  });
  return result;
}

module.exports = isLoggedIn;