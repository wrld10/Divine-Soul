// server/models/Comment.js
// ─────────────────────────────────────────────────────────────────
// A Comment belongs to:
//   • a personality (identified by personalityId — matches the
//     numeric id in the frontend PERSONALITIES array)
//   • a user (userId references the User collection)
// ─────────────────────────────────────────────────────────────────

const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    // Which spiritual personality this comment belongs to (1, 2, 3 …)
    personalityId: {
      type:     Number,
      required: [true, "personalityId is required"],
    },

    // Reference to the User who posted this comment
    userId: {
      type:     mongoose.Schema.Types.ObjectId,
      ref:      "User",
      required: true,
    },

    // Denormalised username so we don't need a join for every render
    username: {
      type:     String,
      required: true,
      trim:     true,
    },

    // The actual reflection text
    commentText: {
      type:      String,
      required:  [true, "Comment text cannot be empty"],
      trim:      true,
      maxlength: [2000, "Comment cannot exceed 2000 characters"],
    },
  },
  {
    // createdAt is used as the display timestamp
    timestamps: true,
  }
);

// Index so fetching comments for a single personality is fast
commentSchema.index({ personalityId: 1, createdAt: -1 });

module.exports = mongoose.model("Comment", commentSchema);
