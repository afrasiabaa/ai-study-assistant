// ~/src/routes/api/user/profile.js

const { SuccessResponse, ErrorResponse } = require("../../../response");

module.exports = (req, res) => {
  try {
    console.log(req.user);
    const { username } = req.user;
    if (!username) {
      res
        .status(400)
        .json(ErrorResponse(400, "Bad Request. Could not find payload."));
    }
    res.status(200).json(SuccessResponse({ username: username }));
  } catch (error) {
    res.status(500).json(ErrorResponse(500, "Server Error."));
  }
};
