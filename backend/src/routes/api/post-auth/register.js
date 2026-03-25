// ~/src/routes/api/post-auth/register.js

const bcrypt = require("bcrypt");
const users = require("../../../fake-db/index");
const { SuccessResponse, ErrorResponse } = require("../../../response");

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    // If user exists
    const existingUser = users.find((u) => u.username === username);
    if (existingUser) {
      return res.status(400).json(ErrorResponse(400, "User already exists."));
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    users.push({ username, password: hashedPassword });

    res
      .status(201)
      .json(SuccessResponse({ message: "User registered successfully" }));
  } catch (err) {
    res.status(500).json(ErrorResponse(500, "Server error"));
  }
};
