const createError = require("../error");
const User = require("../models/User");
const Video = require("../models/Video");

// create a video
const addVideo = async (req, res, next) => {
  try {
    const { title, desc, imgUrl, videoUrl } = req.body;

    const video = await Video.create({
      userId: req.user.userid,
      title,
      desc,
      imgUrl,
      videoUrl,
    });
    res.status(200).json({
      success: true,
      video,
    });
  } catch (error) {
    next(error);
  }
};
//delete a video
const deleteVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return next(createError(404, "Video not found"));
    }
    if (video.userId !== req.user.userid) {
      return next(
        createError(403, "This User is not allowed to delete the video")
      );
    } else {
      await Video.findByIdAndDelete(req.params.id);
      res
        .status(200)
        .json({ success: true, message: "the video is deleted successfully" });
    }
  } catch (error) {
    next(error);
  }
};
// edit a video
const editVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return next(createError(404, "Video not found"));
    }
    if (video.userId !== req.user.userid) {
      return next(
        createError(403, "This User is not allowed to edit the video")
      );
    } else {
      const UpdatedVideo = await Video.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({
        success: true,
        message: "the video is edited successfully",
        UpdatedVideo,
      });
    }
  } catch (error) {
    next(error);
  }
};
// get a video
const getVideo = async (req, res, next) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return next(createError(404, "Video not found"));
    }
    res.status(200).json({ success: true, video });
  } catch (error) {
    next(error);
  }
};
// view video
const viewVideo = async (req, res, next) => {
  try {
    const video = await Video.findByIdAndUpdate(
      req.params.id,
      {
        $inc: { views: 1 },
      },
      { new: true }
    );
    if (!video) {
      return next(createError(404, "Video not found"));
    }
    res
      .status(200)
      .json({ success: true, message: "the view has been increased" });
  } catch (error) {
    next(error);
  }
};
const trendVideo = async (req, res, next) => {
  try {
    const video = await Video.find().sort({ views: -1 });
    res.status(200).json({ success: true, video });
  } catch (error) {
    next(error);
  }
};
const randomVideo = async (req, res, next) => {
  try {
    const video = await Video.aggregate([
      {
        $sample: {
          size: 40,
        },
      },
    ]);
    res.status(200).json({ success: true, video });
  } catch (error) {
    next(error);
  }
};
const subVideo = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userid);
    const subscribedChannels = user.suscribedUsers;
    const list = await Promise.all(
      subscribedChannels.map((channelid) => {
        return Video.find({ userId: channelid });
      })
    );
    res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
    // flat haddles the double array problem
  } catch (error) {}
};
const tagVideo = async (req, res, next) => {
  try {
    const tags = req.query.tags.split(",");

    const video = Video.find({ tags: { $in: tags } }).limit(20);
    res.status(200).json({ success: true, video });
  } catch (error) {
    next(error);
  }
};
const searchVideo = async (req, res, next) => {
  const query = req.query.q;
  try {
    const video = Video.find({ title: { $regex: query, $options: "i" } }).limit(
      40
    );
    res.status(200).json({ success: true, video });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addVideo,
  deleteVideo,
  editVideo,
  getVideo,
  viewVideo,
  trendVideo,
  randomVideo,
  subVideo,
  tagVideo,
  searchVideo,
};
