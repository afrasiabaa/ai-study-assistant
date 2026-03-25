// ~/src/routes/api/study-plan/index.js

const express = require("express");
const router = express.Router();

router.get("/generate", require("./generate"));

module.exports = router;
