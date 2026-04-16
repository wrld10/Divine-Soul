// server/controllers/commentController.js
// ─────────────────────────────────────────────────────────────────
// GET  /api/comments?personalityId=1   → fetch comments (public)
// POST /api/comments                   → add comment (auth required)
// ─────────────────────────────────────────────────────────────────

const Comment = require("../models/Comment");

// ── GET /api/comments?personalityId=<id> ─────────────────────────
// Returns all comments for a given personality, newest first.
// This is a public endpoint — no JWT required.
const getComments = async (req, res) => {
  try {
    const { personalityId } = req.query;

    if (!personalityId) {
      return res.status(400).json({
        success: false,
        message: "personalityId query parameter is required.",
      });
    }

    const comments = await Comment.find({ personalityId: Number(personalityId) })
      .sort({ createdAt: -1 })   // newest first
      .limit(200);                // reasonable cap

    res.status(200).json({
      success:  true,
      count:    comments.length,
      comments,
    });
  } catch (err) {
    console.error("getComments error:", err);
    res.status(500).json({ success: false, message: "Could not load comments." });
  }
};

// ── POST /api/comments ────────────────────────────────────────────
// Creates a new comment.  Requires a valid JWT (authMiddleware sets
// req.user before this handler runs).
// Body: { personalityId, commentText }
const addComment = async (req, res) => {
  try {
    const { personalityId, commentText } = req.body;

    // --- Validation ---
    if (!personalityId) {
      return res.status(400).json({
        success: false,
        message: "personalityId is required.",
      });
    }
    if (!commentText || commentText.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Comment text cannot be empty.",
      });
    }
    if (commentText.trim().length > 2000) {
      return res.status(400).json({
        success: false,
        message: "Comment cannot exceed 2000 characters.",
      });
    }

    // --- Create and save ---
    const comment = await Comment.create({
      personalityId: Number(personalityId),
      userId:        req.user.id,          // set by authMiddleware
      username:      req.user.username,
      commentText:   commentText.trim(),
    });

    res.status(201).json({
      success: true,
      message: "Reflection added. 🙏",
      comment,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(". ") });
    }
    console.error("addComment error:", err);
    res.status(500).json({ success: false, message: "Could not save comment." });
  }
};

module.exports = { getComments, addComment };
