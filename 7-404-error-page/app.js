const express = require("express");

const adminRoutes = require("./routes/admin");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRoutes);

// 404 error handling middleware
app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found</h1>");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
