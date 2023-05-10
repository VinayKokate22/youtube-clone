const jwt = require("jsonwebtoken");
const createError = require("../error");
const verify = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "you are not authenticated "));
  }
  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return next(createError(403, "Token is not valid"));
    }
    console.log("user info in the verify function", user);
    req.user = user;
    next();
  });
};
module.exports = verify;
