const User = require("../models/User");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const createError = require("../error");
const jwt = require("jsonwebtoken");
const signup = async (req, res, next) => {
  try {
    const { name, email, password, img } = req.body;
    const hashpassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashpassword,
      img,
    });
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    next(error);
  }
};
const signin = async (req, res, next) => {
  try {
    const { name, password: plainpassword } = req.body;
    const dbuser = await User.findOne({ name }).select("+password");
    if (!dbuser) {
      return next(createError(404, "User not found"));
    }
    const comparepassword = await bcrypt.compare(
      plainpassword,
      dbuser.password
    );
    if (!comparepassword) {
      return next(createError(400, "Password is Incorrect"));
    }

    const { password, ...userWithoutPassword } = dbuser._doc;
    const accesstoken = jwt.sign(
      {
        userid: dbuser._id,
        username: dbuser.name,
      },
      process.env.SECRET_KEY,
      { expiresIn: "24h" }
    );
    // document.cookie = `access_token=${accesstoken}`;
    // res.cookie("access_token", accesstoken, {
    //   maxAge: 36000, // expires after 1 hr
    //   httpOnly: true, // cannot be modified using XSS or JS
    //   sameSite: "none",
    // });
    res.status(200).json({ userWithoutPassword, accesstoken });
  } catch (error) {
    next(error);
  }
};
const google = (req, res) => {
  try {
    const newUser = new User();
  } catch (error) {}
};
module.exports = { signin, signup, google };
