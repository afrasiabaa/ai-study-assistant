// ~/src/db/mongo.js

const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to DB."))
  .catch((err) => console.error("Could not connect to DB."));

const userSchema = new mongoose.Schema({
  username: String,
  passwordHash: String,
  preferences: Object,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
