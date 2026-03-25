// ~/src/db/index.js

if (process.env.MONGO_URL) {
  module.exports = require("./mongo");
} else {
  module.exports = require("./fake-db");
}
