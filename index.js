const express = require("express");
const DATA = require("./data");

const app = express();
const port = process.env.PORT || 3000;

app.get("/characters", (req, res) => {
  res.status(200).json(DATA);
});

app.get("/characters/:id", (req, res) => {
  const { id } = req.params;
  const character = DATA.find((character) => character.char_id == id);
  res.status(200).json(character);
});

app.get("/*", (req, res) => {
  res.status(404).json({
    message: "Page does not exists",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
