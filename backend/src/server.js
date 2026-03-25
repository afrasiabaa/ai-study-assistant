// ~/src/server.js
const app = require("./app");

const PORT = parseInt(process.env.PORT, 10);

const server = app.listen(PORT || "8080", () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = server;
