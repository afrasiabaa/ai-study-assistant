// ~/src/routes/api/post-auth/login.js

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { ErrorResponse, SuccessResponse } = require("../../../response");

const users = require("../../../fake-db/index");

module.exports = async (req, res) => {
  try {
    const SECRET_KEY = process.env.JWT_SECRET;
    const { username, password } = req.body;
    const email = null;

    // Find user
    const user = users.find((u) => u.username === username);
    if (!user) {
      return res.status(400).json(ErrorResponse(400, "User does not exist"));
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json(ErrorResponse(400, "Credientials do not match"));
    }

    // Create token
    const token = jwt.sign({ username: user.username }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.json(
      SuccessResponse({
        message: "Login successful",
        token,
        user: {
          username,
          email,
        },
      }),
    );
  } catch (err) {
    res.status(500).json(ErrorResponse(500, "Server error"));
  }
};
