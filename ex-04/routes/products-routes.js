const express = require("express");
const router = express.Router();
const products = require("../data/products");

router.get("/products", (req, res) => {
  res.json(products);
});

router.get("/products/:productId", (req, res) => {
  let foundIndex = products.findIndex(
    (product) => product.id === req.params.productId
  );

  if (foundIndex === -1) {
    res.sendStatus(404);
  } else {
    res.json(products[foundIndex]);
  }
});

module.exports = router;
