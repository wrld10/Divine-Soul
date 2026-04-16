// server/models/User.js
// ─────────────────────────────────────────────────────────────────
// Defines the shape of a User document stored in MongoDB.
// Passwords are stored as bcrypt hashes — never plain text.
// ─────────────────────────────────────────────────────────────────

const mongoose = require("mongoose");
const bcrypt   = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    // Display name shown next to comments, welcome message, etc.
    username: {
      type:     String,
      required: [true, "Username is required"],
      trim:     true,
      minlength: [2, "Username must be at least 2 characters"],
      maxlength: [50, "Username cannot exceed 50 characters"],
    },

    // Must be unique across all accounts
    email: {
      type:     String,
      required: [true, "Email is required"],
      unique:   true,
      lowercase: true,
      trim:     true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },

    // Stored as a bcrypt hash (saltRounds = 12)
    password: {
      type:     String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
  },
  {
    // Automatically adds createdAt and updatedAt fields
    timestamps: true,
  }
);

// ── Pre-save hook: hash the password before every save ────────────
// This runs automatically whenever a User document is saved.
userSchema.pre("save", async function (next) {
  // Only re-hash if the password field was actually changed
  if (!this.isModified("password")) return next();

  // saltRounds = 12 is a good balance of security vs. speed
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// ── Instance method: compare a plain-text password to the hash ───
// Usage: const isMatch = await user.comparePassword(plainText);
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
