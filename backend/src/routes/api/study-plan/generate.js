// ~/src/routes/api/study-plan/generate.js

const { SuccessResponse, ErrorResponse } = require("../../../response");

module.exports = (req, res) => {
  try {
    res.status(200).json(SuccessResponse({ generatedPrompt: "Test123" }));
  } catch (error) {
    res.status(500).json(ErrorResponse(500, "Server Error."));
  }
};
