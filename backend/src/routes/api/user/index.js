// ~/src/routes/api/user/index.js

const express = require("express");
const router = express.Router();

router.get("/profile", require("./profile"));

module.exports = router;
