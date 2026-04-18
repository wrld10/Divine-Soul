// server/server.js
// ─────────────────────────────────────────────────────────────────
// Entry point for the Divine Soul backend.
//
// Start with:
//   node server/server.js          (production)
//   npx nodemon server/server.js   (development, auto-restarts)
// ─────────────────────────────────────────────────────────────────

// Load environment variables from .env file FIRST
require("dotenv").config();

const express   = require("express");
const mongoose  = require("mongoose");
const cors      = require("cors");
const path      = require("path");

// ── Route imports ─────────────────────────────────────────────────
const authRoutes    = require("./routes/auth");
const commentRoutes = require("./routes/comments");

const app  = express();
const PORT = process.env.PORT || 5000;

// ── CORS ─────────────────────────────────────────────────────────
// Allow the frontend origin (Live Server default: 5500) plus
// any other origins you add to CLIENT_ORIGIN in .env.
app.use(
  cors({
    origin: ["https://divine-soul.vercel.app"],
    credentials: true,
  })
);

// ── Body parsing ──────────────────────────────────────────────────
app.use(express.json({ limit: "10kb" }));           // parse JSON bodies
app.use(express.urlencoded({ extended: true }));    // parse form bodies

// ── Serve the client folder as static files ───────────────────────
// So you can open http://localhost:5000 and see your frontend too.
app.use(express.static(path.join(__dirname, "../client")));

// ── API routes ────────────────────────────────────────────────────
app.use("/api/auth",     authRoutes);
app.use("/api/comments", commentRoutes);

// ── Health check ──────────────────────────────────────────────────
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "Divine Soul API is running 🙏" });
});

// ── Catch-all: serve index.html for client-side routing ───────────
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html"));
});

// ── Global error handler ──────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({ success: false, message: err.message || "Internal server error." });
});

// ── Connect to MongoDB, then start listening ──────────────────────
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/divine_soul";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("✅  MongoDB connected:", MONGODB_URI.replace(/\/\/.*@/, "//<credentials>@"));
    app.listen(PORT, () => {
      console.log(`🚀  Server running on http://localhost:${PORT}`);
      console.log(`📖  API docs: http://localhost:${PORT}/api/health`);
    });
  })
  .catch((err) => {
    console.error("❌  MongoDB connection failed:", err.message);
    process.exit(1);
  });
