app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // simple fake token
  const token = "fake-jwt-token-" + username;

  res.json({ message: "Login successful", token });
});