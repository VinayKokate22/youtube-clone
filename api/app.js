const express = require("express");
const userroute = require("./routes/userroute");
const videoroute = require("./routes/videoroute");
const commentroute = require("./routes/commentroute");
const authroute = require("./routes/authroute");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use("/api/v1/auth", authroute);
app.use("/api/v1/user", userroute);
app.use("/api/v1/video", videoroute);
app.use("/api/v1/comment", commentroute);
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});
module.exports = app;
