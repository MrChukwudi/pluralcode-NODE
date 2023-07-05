const path = require("path");
const http = require("http");
const fs = require("fs");

console.log(fs.mkdir(path.join(__dirname, "public")), {}, (err) => {
  if (err) {
    throw err;
  }
});
