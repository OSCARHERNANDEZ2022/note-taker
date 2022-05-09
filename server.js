const { notes } = require("./Develop/public/notes.json");
const express = require("express");
const app = express();

app.get("/api/notes", (req, res) => {
  res.send("");
});

app.listen(3002, () => {
  console.log(`API server now on port 3002!`);
});
