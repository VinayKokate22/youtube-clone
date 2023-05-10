const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    img: {
      type: String,
    },
    suscribers: {
      type: Number,
      default: 0,
    },
    suscribedUsers: {
      type: [String],
      default: 0,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
