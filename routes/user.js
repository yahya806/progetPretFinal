const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");
const isAuth = require("../middleware/passport");
const { Router } = require("express");

//register
router.post("/register", registerRules(), validation, async (req, res) => {
  const { name, lastname, email, password, photo, profession, isAdmin } =
    req.body;
  try {
    const newUser = new User({
      name,
      lastname,
      email,
      password,
      photo,
      profession,
      isAdmin,
    });
    // check email existing
    const searchedUser = await User.findOne({ email });
    if (searchedUser) {
      return res.status(400).send({ msg: "email is already exist" });
    }

    //hash password
    const salt = 10;
    const genSalt = await bcrypt.genSalt(salt);
    const hashedPassword = await bcrypt.hash(password, genSalt);
    console.log(hashedPassword);
    newUser.password = hashedPassword;
    //generate token

    // save the user
    const newUserToken = await newUser.save();
    const payload = {
      _id: newUserToken._id,
      name: newUserToken.name,
    };
    const token = jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });
    res.status(200).send({
      user: newUserToken,
      msg: "user is saved",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send(error);
  }
});

//login
router.post("/login", loginRules(), validation, async (req, res) => {
  const { email, password } = req.body;
  try {
    //if user exist
    const searchedUser = await User.findOne({ email });
    //if email not exisit
    if (!searchedUser) {
      return res.status(400).send({ msg: "bad credential" });
    }
    //password equal
    const match = await bcrypt.compare(password, searchedUser.password);

    if (!match) {
      return res.status(400).send({ msg: "bad credential" });
    }
    //create token
    const payload = {
      _id: searchedUser.id,
      name: searchedUser.name,
    };
    const token = jwt.sign(payload, process.env.SecretOrKey, {
      expiresIn: 3600,
    });

    // send user
    res.status(200).send({
      user: searchedUser,
      msg: "successful",
      token: `Bearer ${token}`,
    });
  } catch (error) {
    res.status(500).send({ msg: "cannot get the user" });
  }
});

router.get("/current", isAuth(), async (req, res) => {
  res.status(200).send({ user: req.user });
});

router.get("/users", async (req, res) => {
  try {
    const result = await User.find();
    res.send({ users: result });
  } catch (error) {
    console.log(error);
  }
});
//delete user
router.delete("/:id", async (req, res) => {
  try {
    const result = await User.findOneAndRemove({ _id: req.params.id });
    res.send({ msg: "deleted" });
  } catch (error) {
    res.send({ message: "cannot delete the book" });
  }
});

//update user
router.put("/updateUser/:id", async (req, res) => {
  try {
    const result = await User.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: { ...req.body } }
    );
    res.send({ msg: "user updated successfully" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
