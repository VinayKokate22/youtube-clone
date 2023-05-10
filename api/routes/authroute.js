const express = require("express");
const { signin, signup } = require("../controllers/auth");
const router = express.Router();

router.route("/singup").post(signup);
router.route("/singin").post(signin);

module.exports = router;
