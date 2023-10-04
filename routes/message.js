const express = require("express");
const middleware = require("../middleware/jwt.middleware");
const User = require("../model/register");
const Message = require("../model/message");

const router = express.Router();

router.post("/post", middleware, async (req, res) => {
  try {
    const { text } = req.body;
    const user = await User.findById(req.user.id);
    const newMessage = new Message({
      user: req.user.id,
      username: user.username,
      text: text,
      email: user.email,
    });
    await newMessage.save();
    const allMsg = await Message.find();
    return res.status(200).json(allMsg);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

router.get("/", middleware, async (req, res) => {
  try {
    const { email } = await User.findById(req.user.id);
    const messages = await Message.find({ email });
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json(error.messages);
  }
});

router.get("/:email", middleware, async (req, res) => {
  try {
    const { email } = req.params;
    const messages = await Message.find({ email });
    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json(error.messages);
  }
});

router.get("/all", middleware, async (req, res) => {
  try {
    const allMsg = await Message.find();
    return res.status(200).json(allMsg);
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

module.exports = router;
