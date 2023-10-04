const express = require("express");
const middleware = require("../middleware/jwt.middleware");
const User = require("../model/register");

const router = express.Router();

router.get("/", middleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(400).json("User Not Found");
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

router.put("/", middleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const { password } = req.body;
    if (!password) return res.status(400).json("Invalid Psassword");
    if (password === user.password)
      return res.status(400).json("Same Password");
    user.password = password;
    user.confirmpassword = password;
    await user.save();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = router;
