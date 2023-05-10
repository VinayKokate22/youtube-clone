const mongoose = require("mongoose");
const connectDb = async () => {
  await mongoose
    .connect(process.env.CONNECT)
    .then((e) => {
      console.log("database connected :", e.connection.host, e.connection.name);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectDb;
