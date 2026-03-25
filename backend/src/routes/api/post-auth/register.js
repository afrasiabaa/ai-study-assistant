// ~/src/routes/api/post-auth/register.js

const bcrypt = require("bcrypt");
const users = require("../../../db/index");
const { SuccessResponse, ErrorResponse } = require("../../../response");

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body;

    // If user exists
    const existingUser = await (process.env.MONGO_URL
      ? users.findOne({ username })
      : users.find((u) => u.username === username));

    if (existingUser) {
      return res.status(400).json(ErrorResponse(400, "User already exists."));
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    if (process.env.MONGO_URL) {
      await users.create({ username, passwordHash: hashedPassword });
    } else {
      users.push({ username, passwordHash: hashedPassword });
    }

    res
      .status(201)
      .json(SuccessResponse({ message: "User registered successfully" }));
  } catch (err) {
    res.status(500).json(ErrorResponse(500, "Server error"));
  }
};
