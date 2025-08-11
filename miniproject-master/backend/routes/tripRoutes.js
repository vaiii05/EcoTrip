const express = require("express");
const router = express.Router();

// Example Route (Modify as needed)
router.get("/", (req, res) => {
  res.json({ message: "Trips API working!" });
});

module.exports = router; // Ensure you export router, NOT an object!
