// ~/src/server.js
// const app = require("./app");

// const PORT = parseInt(process.env.PORT, 10);

// const server = app.listen(PORT || "8080", () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });

// module.exports = server;

const express = require("express");
const cors = require("cors");
const users = require("./fake-db/index");

const app = express();

app.use(cors());
app.use(express.json());

// REGISTER
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  const existingUser = users.find(u => u.username === username);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  users.push({ username, password });
  res.json({ message: "User registered successfully" });
  console.log(username);
  console.log(password);
});

// LOGIN
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({ message: "Login successful" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
