// ~/src/index.js

require("dotenv").config();

// For local hosting
if (process.env.NODE_ENV !== "production") {
  require("./server");
}

// Vercel Hosting requires app
const app = require("./app");
module.exports = app;
