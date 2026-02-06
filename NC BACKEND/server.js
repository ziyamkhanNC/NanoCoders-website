require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(morgan("dev"));
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json({ limit: "10mb" }));

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Routes
app.use("/api/contact", contactRoutes);

// Health check
app.get("/api/health", (req, res) =>
  res.json({ status: "OK", timestamp: new Date() }),
);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
