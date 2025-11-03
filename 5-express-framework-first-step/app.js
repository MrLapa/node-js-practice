const http = require("http");

const express = require("express");

const app = express();

app.use("/paragraph", (req, res, next) => {
  console.log("Paragraph route accessed", req.url);
  res.send("<div><h1>Hello, World! from Express</h1><p>This is a paragraph.</p></div>");
});

app.use("/", (req, res, next) => {
  console.log("Root route accessed", req.url);
  res.send("<h1>Hello, World! from Express</h1>");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
