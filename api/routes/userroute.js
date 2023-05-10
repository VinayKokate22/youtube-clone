const {
  deleteUser,
  getsingleUser,
  subscribeUser,
  unsuscribeUser,
  like,
  dislike,
  updateUser,
} = require("../controllers/usercontroller");

const express = require("express");
const verify = require("../middlewares/verifyuser");
const router = express.Router();
//updateuser
router.route("/:id").put(verify, updateUser);
//deleteuser
router.route("/:id").delete(verify, deleteUser);

//get a user
router.route("/find/:id").get(getsingleUser);

//subscribe a user
router.route("/sub/:id").put(verify, subscribeUser);

//unsuscribe a user
router.route("/unsub/:id").put(verify, unsuscribeUser);

//like a video
router.route("/like/:videoid").get(verify, like);

//dislike a user
router.route("/dislike/:videoid").get(verify, dislike);

//
module.exports = router;
