// ~/src/response.js

const ErrorResponse = (code, message) => {
  return {
    status: "error",
    error: {
      code,
      message,
    },
  };
};

const SuccessResponse = (data = {}) => {
  return {
    ...data,
    status: "ok",
  };
};

module.exports = { ErrorResponse, SuccessResponse };
