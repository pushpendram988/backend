const express = require("express");
const app = express();

app.post("/", (req, res) => {
  res.json({
    message: " succesfully ran backend",
  });
});

app.listen(5000, () => console.log("app running on 5000"));
