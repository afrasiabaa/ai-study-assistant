// ~/src/routes/index.js - http://localhost:port/

const express = require("express");
const { SuccessResponse } = require("../response");
const router = express.Router();

// Mount our api routes
router.use("/api", require("./api"));

// Heatlh Check
router.get("/", (req, res) => {
  res.status(200).setHeader("Cache-Control", "no-cache");
  res.json(SuccessResponse());
});

module.exports = router;
