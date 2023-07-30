const express = require("express");
const auth = require("../middlewares/auth");
const User = require("../models/users");
const router = express.Router();

//get user profile details
router.get("/", auth, async (req, res) => {
  try {
    // let user = await User.findOne({ email: req.payload.email });
    let user= await User.findById(req.payload._id)
    if (!user) return res.status(404).send("no such user");
    res.status(200).send(_.pick(user, ["name", "email"]))
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
