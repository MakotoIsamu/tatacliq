const express = require("express");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const checkAuth = require('../middlewares/checkAuth');
const router = express.Router();

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Check if user already exists
    const alreadyExist = await User.findOne({ email });
    if (alreadyExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "User successfully signed up" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Signup first" });
    }

    // Compare password with hashed password in the database
    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    // Set user session ID if login is successful
    req.session.userId = user._id;
    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Logout route
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to log out', error: err.message });
    }
    // Clear the cookie after the session is destroyed
    res.clearCookie('connect.sid');
    res.json({ message: 'Logout successful' });
  });
});

// Check Auth route
router.get('/checkAuth', (req, res) => {
  try {
    if (req.session && req.session.userId) {
      // Check if userId exists in the session
      res.json({ message: 'Authorized' });
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
