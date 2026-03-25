// ~/src/routes/api/index.js - https://localhost:port/api/

const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");

// Mount our routes (folders)
router.use("/auth", require("./post-auth"));
router.use("/user", auth, require("./user"));
router.use("/study-plan", auth, require("./study-plan"));

module.exports = router;
