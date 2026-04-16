// server/routes/comments.js
// ─────────────────────────────────────────────────────────────────
// Comment routes — mounted at /api/comments in server.js
// ─────────────────────────────────────────────────────────────────

const express        = require("express");
const router         = express.Router();
const authMiddleware = require("../middleware/auth");
const { getComments, addComment } = require("../controllers/commentController");

// GET /api/comments?personalityId=1
// Public — anyone can read comments (even logged-out visitors)
router.get("/", getComments);

// POST /api/comments
// Protected — only authenticated users may post
router.post("/", authMiddleware, addComment);

module.exports = router;
