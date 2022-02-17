const express = require("express");
const app = express();
const port = 3000;
const products = require("./routes/products-routes");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", products); // kaikki tuotteet

app.use("/:productId", products); // tuote id:llä

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
