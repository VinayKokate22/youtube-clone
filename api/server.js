const connectDb = require("./config/dbconnection");
const dotenv = require("dotenv").config({ path: "config/.env" });
const app = require("./app");
connectDb();
const server = app.listen(process.env.PORT, () => {
  console.log("connected! on Port ::", `${process.env.PORT}`);
});
