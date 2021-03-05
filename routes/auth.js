const router = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const passport = require("passport");

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Error while attempting to login" });
    }
    if (!user) {
      return res.status(400).json({ message: "Wrong credentials" });
    }
    req.login(user, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ message: "Error while attempting to login" });
      }
      return res.status(200).json(user);
    });
  })(req, res);
});
