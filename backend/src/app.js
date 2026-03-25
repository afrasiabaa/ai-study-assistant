// ~/src/app.js

const express = require("express");
const cors = require("cors");
const { ErrorResponse } = require("./response");

// Create our app so that we can apply middleware and routes.
const app = express();

// Mount our middleware.
app.use(cors());
app.use(express.json());

// Mount our routes
app.use("/", require("./routes"));

// 404 Middleware
app.use((req, res) => {
  res.status(404).json(ErrorResponse(404, "error 404. route not found."));
});

// 500 Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json(ErrorResponse(500, "something went wrong."));
});

module.exports = app;
