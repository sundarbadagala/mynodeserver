const express = require("express");
const middleware = require("../middleware/jwt.middleware");
const User = require("../model/register");

const router = express.Router();

router.get("/", middleware, async (req, res) => {
  try {
    const users = await User.find();
    if (!users) return res.status(400).json("No Data Found");
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json("Server Error");
  }
});

module.exports = router;
