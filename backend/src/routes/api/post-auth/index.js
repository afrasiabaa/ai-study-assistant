// ~/src/routes/api/post-auth/index.js

const express = require("express");
const router = express.Router();

// Mount our post methods
router.post("/login", require("./login"));
router.post("/register", require("./register"));

module.exports = router;
