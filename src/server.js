const express = require("express");
const app = express();
const PORT = 3000;

app.use("/", (req, res) => {
  res.send("Hi Node");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

module.export = app;
