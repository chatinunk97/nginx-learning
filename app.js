const express = require("express");
const app = express();
const port = 3000;

const instanceName = process.env.instance;

app.get("/node", (req, res) => {
  console.log(`Request was processed by ${instanceName}`);
  console.log(req.headers);
  res.send(`Hello, World! from ${instanceName}`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
``;
