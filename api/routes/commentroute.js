const express = require("express");
const verify = require("../middlewares/verifyuser");
const {
  addComment,
  getComment,
  deleteComment,
} = require("../controllers/commentcontroller");
const router = express.Router();

router.route("/").post(verify, addComment);
router.route("/:id").delete(verify, deleteComment);
router.route("/:VideoId").get(getComment);

module.exports = router;
