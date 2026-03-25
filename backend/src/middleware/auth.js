// ~/src/middleware/auth.js

const jwt = require("jsonwebtoken");
const { ErrorResponse } = require("../response");
const SECRET_KEY = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  try {
    const authorization_header = req.headers["authorization"];

    if (!authorization_header || !authorization_header.startsWith("Bearer ")) {
      return res
        .status(401)
        .json(ErrorResponse(401, "No token, authorization failed."));
    }

    const token = authorization_header.split(" ")[1];

    jwt.verify(token, SECRET_KEY, (error, decoded) => {
      if (error) {
        console.log(`Token is not valid. Error ${error}`);
        return res.status(401).json(ErrorResponse(401, "Token is not valid."));
      } else {
        req.user = decoded;
        next();
      }
    });
  } catch (err) {
    console.error(`Middleware Error: ${err}`);
    res.status(500).json(ErrorResponse(500, "Server Error."));
  }
};
