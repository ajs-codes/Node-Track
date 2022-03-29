const express = require("express");

// express app
const app = express();
const PORT = 4000;
// register view
app.set("view engine", "ejs");
// GET /
app.get("/", (req, res) => {
  // res.sendFile("./views/index.html", { root: __dirname });
  res.render("index", { title: "Express App | Home" });
});
// GET /about
// * app.get("/about", (req, res) => {
// *  res.sendFile("./views/about.html", { root: __dirname });
// * });
// GET /aboutus
// * app.get("/aboutus", (req, res) => {
// * res.redirect("/about");
// * });
// GET 404
app.use((req, res) => {
  res.status(404).send("Not found 😕");
});
// starting the server
app.listen(PORT, () => {
  console.log("Server running at http://localhost:4000");
});
