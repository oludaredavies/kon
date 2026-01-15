const express = require("express");

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from the sample app",
    path: req.path,
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/echo", (req, res) => {
  res.json({
    method: req.method,
    query: req.query,
    headers: {
      "user-agent": req.get("user-agent"),
    },
  });
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on http://localhost:${port}`);
});
