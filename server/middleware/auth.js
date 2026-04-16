// server/middleware/auth.js
// ─────────────────────────────────────────────────────────────────
// Express middleware that verifies the JWT attached to a request.
//
// Usage: add  authMiddleware  before any route handler that should
// only be accessible to logged-in users.
//
// The client must send the token in the Authorization header:
//   Authorization: Bearer <token>
//
// If valid, req.user is set to { id, username, email } and the
// next middleware is called.  Otherwise a 401 is returned.
// ─────────────────────────────────────────────────────────────────

const jwt  = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try {
    // 1. Extract the token from the Authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Access denied. Please log in to continue.",
      });
    }

    const token = authHeader.split(" ")[1]; // everything after "Bearer "

    // 2. Verify the token — throws if expired or tampered
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Make sure the user still exists in the database
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "The account associated with this token no longer exists.",
      });
    }

    // 4. Attach user info to the request so route handlers can use it
    req.user = {
      id:       user._id,
      username: user.username,
      email:    user.email,
    };

    next(); // hand off to the actual route handler
  } catch (err) {
    // jwt.verify throws on bad/expired tokens
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ success: false, message: "Invalid token." });
    }
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ success: false, message: "Session expired. Please log in again." });
    }
    console.error("Auth middleware error:", err);
    res.status(500).json({ success: false, message: "Server error during authentication." });
  }
};

module.exports = authMiddleware;
