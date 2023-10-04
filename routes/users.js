const express = require("express");
const middleware = require("../middleware/jwt.middleware");
const User = require("../model/register");
const getUsers = require("../utils/getUsers");

const router = express.Router();

router.get("/", middleware, async (req, res) => {
  try {
    const users = await User.find();
    if (!users) return res.status(400).json("No Data Found");
    return res.status(200).json(getUsers(users));
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = router;
