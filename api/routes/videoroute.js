const express = require("express");
const verify = require("../middlewares/verifyuser");
const {
  addVideo,
  editVideo,
  deleteVideo,
  getVideo,
  viewVideo,
  trendVideo,
  randomVideo,
  subVideo,
  tagVideo,
  searchVideo,
} = require("../controllers/videocontroller");
const router = express.Router();
// post a new video
router.route("/").post(verify, addVideo);
// delete a video
router.route("/:id").delete(verify, deleteVideo);
// edit a video
router.route("/:id").put(verify, editVideo);
// get a video
router.route("/find/:id").get(getVideo);
// view a video
router.route("/view/:id").put(viewVideo);
// trending videos
router.route("/trend").get(trendVideo);
// random videos (home page)
router.route("/random").get(randomVideo);
// subcribed video
router.route("/sub").get(verify, subVideo);
// video based on the tag
router.route("/tags").get(tagVideo);
// video based on the search
router.route("/search").get(searchVideo);

module.exports = router;
