// server/routes/auth.js
// ─────────────────────────────────────────────────────────────────
// Auth routes — mounted at /api/auth in server.js
// ─────────────────────────────────────────────────────────────────

const express = require("express");
const router  = express.Router();
const { signup, login } = require("../controllers/authController");

// POST /api/auth/signup  → register a new user
router.post("/signup", signup);

// POST /api/auth/login   → log in with email + password
router.post("/login",  login);

module.exports = router;
