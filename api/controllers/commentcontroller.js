const createError = require("../error");
const Comments = require("../models/Comments");

const addComment = async (req, res, next) => {
  try {
    const { videoId, desc } = req.body;
    const comment = await Comments.create({
      userId: req.user.userid,
      videoId,
      desc,
    });
    res.status(200).json({
      success: true,
      comment,
    });
  } catch (error) {
    next(error);
  }
};
const deleteComment = async (req, res, next) => {
  try {
    const comment = await Comments.findById(req.params.id);
    if (comment.userId !== req.user.userid) {
      return next(createError(403, "You can only delete your comment"));
    } else {
      await Comments.findByIdAndDelete(req.params.id);
      res.status(200).json({
        success: true,
        message: "comment is deleted",
      });
    }
  } catch (error) {
    next(error);
  }
};
const getComment = async (req, res, next) => {
  try {
    const comment = await Comments.find({ videoId: req.params.VideoId })
      .sort({ createdAt: -1 }) // Sort by createdAt field in descending order (-1)
      .exec();
    res.status(200).json({
      success: true,
      comment,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { addComment, deleteComment, getComment };
