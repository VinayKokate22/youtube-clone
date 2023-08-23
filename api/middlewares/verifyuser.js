const jwt = require("jsonwebtoken");
const createError = require("../error");
const verify = async (req, res, next) => {
  const authHeader = await req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) {
        return next(createError(403, "Token is not valid"));
      }
      console.log("token is verified");
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("you are not authenticated");
  }
};
module.exports = verify;
