const http = require("http");

const express = require("express");

const adminRoutes = require("./routes/admin");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
