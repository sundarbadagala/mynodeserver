const express = require("express");
const middleware = require("../middleware/jwt.middleware");
const getUsers = require("../utils/getUsers");

const User = require("../model/register");

const router = express.Router();

router.get("/", middleware, async (req, res) => {
  try {
    const { username } = req.query;
    const user = await User.find({ username });
    if (!user) res.status(400).json("User Not Found");
    return res.status(200).json(getUsers(user));
  } catch (error) {
    return res.status(500).json("Server Error");
  }
});

router.get("/:username", middleware, async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.find({ username });
    if (!user) return res.status(400).json("User Not Found");
    return res.status(200).json(getUsers(user));
  } catch (error) {
    return res.status(500).json("Server Error");
  }
});
module.exports = router;
