// server/controllers/authController.js
// ─────────────────────────────────────────────────────────────────
// Handles user registration and login.
// Both endpoints return a signed JWT that the client stores and
// sends with every protected request.
// ─────────────────────────────────────────────────────────────────

const jwt  = require("jsonwebtoken");
const User = require("../models/User");

// ── Helper: create and sign a JWT ────────────────────────────────
function signToken(userId) {
  return jwt.sign(
    { id: userId },                    // payload
    process.env.JWT_SECRET,            // secret
    { expiresIn: process.env.JWT_EXPIRES_IN || "7d" }
  );
}

// ── POST /api/auth/signup ─────────────────────────────────────────
// Body: { username, email, password }
// Creates a new user and returns a JWT.
const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // --- Basic validation ---
    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide username, email, and password.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters.",
      });
    }

    // --- Check for duplicate email ---
    const existing = await User.findOne({ email: email.toLowerCase().trim() });
    if (existing) {
      return res.status(409).json({
        success: false,
        message: "An account with this email already exists. Please log in.",
      });
    }

    // --- Create user (password is hashed by the pre-save hook) ---
    const user = await User.create({ username, email, password });

    // --- Issue token ---
    const token = signToken(user._id);

    res.status(201).json({
      success:  true,
      message:  "Account created successfully. Welcome to the Sangha!",
      token,
      user: {
        id:       user._id,
        username: user.username,
        email:    user.email,
      },
    });
  } catch (err) {
    // Mongoose validation errors (e.g. invalid email format)
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(". ") });
    }
    console.error("Signup error:", err);
    res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
};

// ── POST /api/auth/login ──────────────────────────────────────────
// Body: { email, password }
// Validates credentials and returns a JWT.
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // --- Basic validation ---
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password.",
      });
    }

    // --- Find the user ---
    const user = await User.findOne({ email: email.toLowerCase().trim() });
    if (!user) {
      // Generic message so we don't reveal whether email exists
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password.",
      });
    }

    // --- Check password ---
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect email or password.",
      });
    }

    // --- Issue token ---
    const token = signToken(user._id);

    res.status(200).json({
      success:  true,
      message:  "Login successful. Welcome back!",
      token,
      user: {
        id:       user._id,
        username: user.username,
        email:    user.email,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
};

module.exports = { signup, login };
