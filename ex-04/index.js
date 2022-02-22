const express = require("express");
const app = express();
const port = 3000;
const products = require("./routes/products-routes");
const users = require("./routes/users-routes");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// PRODUCTS STARTS

app.use("/", products); // kaikki tuotteet

app.use("/:productId", products); // GET tuote id:llä

app.use("/:productId", products); // PUT tuote id:llä

app.use("/:productId", products); // DELETE tuote id:llä

app.use("/category/:category", products); // SEARCH BY CATEGORY

app.use("/name/:name", products); // SEARCH BY NAME

app.use("/manufacturer/:manufacturer", products); // SEARCH BY MANUFACTURER

// PRODUCTS ENDS
// USERS STARTS

app.use("/", users); // GET all users

// USERS ENDS

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
