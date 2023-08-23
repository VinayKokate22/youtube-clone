const createError = require("../error");
const User = require("../models/User");
const Video = require("../models/Video");

const updateUser = async (req, res, next) => {
  if (req.params.id === req.user.userid) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      next(error);
    }
  } else {
    return next(createError(403, "you can update only your accout"));
  }
};
const deleteUser = async (req, res, next) => {
  if (req.params.id === req.user.userid) {
    try {
      await User.findByIdAndDelete(req.params.id);

      res.status(200).json("accout has been deleted");
    } catch (error) {
      return next(error);
    }
  } else {
    return next(createError(403, "you can delete only your accout"));
  }
};
const getsingleUser = async (req, res, next) => {
  try {
    const userinfo = await User.findById(req.params.id);
    res.status(200).json(userinfo);
  } catch (error) {
    return next(error);
  }
};
const subscribeUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.userid, {
      $addToSet: { suscribedUsers: req.params.id },
    });
    if (!user) {
      return next(createError(404, "User not found"));
    }
    if (user.suscribedUsers.includes(req.params.id)) {
      return next(createError(400, "Already Suscribed"));
    } else {
      const targetuser = await User.findByIdAndUpdate(req.params.id, {
        $inc: { suscribers: 1 },
      });
      if (!targetuser) {
        return next(createError(404, "Target user not found"));
      }
      res.status(200).json("subscription successful");
    }
  } catch (error) {
    next(error);
  }
};
const unsuscribeUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.userid, {
      $pull: { suscribedUsers: req.params.id },
    });
    if (!user) {
      return next(createError(404, "User not found"));
    }
    if (!user.suscribedUsers.includes(req.params.id)) {
      return next(createError(400, "Not Suscribed"));
    } else {
      const targetuser = await User.findByIdAndUpdate(req.params.id, {
        $inc: { suscribers: -1 },
      });
      if (!targetuser) {
        return next(createError(404, "Target user not found"));
      }
      res.status(200).json("unsubscription successful");
    }
  } catch (error) {
    next(error);
  }
};
const like = async (req, res, next) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.videoid, {
      $addToSet: { likes: req.user.userid },
      $pull: { dislike: req.user.userid },
    });
    res.status(200).json("The video has been liked");
  } catch (error) {
    next(error);
  }
};
const dislike = async (req, res, next) => {
  try {
    const video = await Video.findByIdAndUpdate(req.params.videoid, {
      $addToSet: { dislike: req.user.userid },
      $pull: { likes: req.user.userid },
    });
    res.status(200).json("The video has been disliked");
  } catch (error) {
    next(error);
  }
};
module.exports = {
  updateUser,
  deleteUser,
  getsingleUser,
  subscribeUser,
  unsuscribeUser,
  like,
  dislike,
};
