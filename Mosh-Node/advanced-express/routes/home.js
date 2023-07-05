const express = require("express");
const myRouter = express.Router();

myRouter.get("/", (req, res) => {
  res.render("index", {
    title: "My App",
    message: "Welcome to my Express App!",
  });
});

module.exports = myRouter;
