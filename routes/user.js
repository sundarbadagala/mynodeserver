const express = require("express");
const middleware = require("../middleware/jwt.middleware");
const getUsers = require("../utils/getUsers");

const User = require("../model/register");

const router = express.Router();

router.get("/", middleware, async (req, res) => {
  try {
    const { username } = req.query;
    const user = await User.find({ username });
    if (user.length === 0) res.status(400).json("User Not Found");
    return res.status(200).json(getUsers(user));
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

router.get("/:username", middleware, async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.find({ username });
    if (user.length === 0) return res.status(400).json("User Not Found");
    return res.status(200).json(getUsers(user));
  } catch (error) {
    return res.status(500).json(error.message);
  }
});
module.exports = router;
