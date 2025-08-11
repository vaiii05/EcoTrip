const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Ensure environment variables are loaded correctly
if (!process.env.MONGO_URI) {
    console.error("❌ MONGO_URI is missing. Check your .env file!");
    process.exit(1);
}

// Connect to MongoDB with detailed error logging
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
      console.error("❌ MongoDB Connection Error:", err);
      process.exit(1); // Stop the server if DB connection fails
  });

// Import routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
