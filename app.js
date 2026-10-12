const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({
    message: "Node.js DevSecOps application",
    status: "running",
    version: "1.0.0"
  });
});

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "healthy" });
});

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  app.listen(port, "0.0.0.0", () => {
    console.log(`Application running on port ${port}`);
  });
}

module.exports = app;
