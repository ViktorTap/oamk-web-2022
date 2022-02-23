const express = require("express");
const router = express.Router();
const products = require("../data/products");
const { v4: uuidv4 } = require("uuid");

router.get("/products", (req, res) => {
  console.log("GET ALL PRODUCTS");
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

router.put("/products/:productId", (req, res) => {
  let foundProduct = products.find(
    (product) => product.id === req.params.productId
  );

  if (foundProduct) {
    foundProduct.name = req.body.name;
    foundProduct.manufacturer = req.body.manufacturer;
    foundProduct.category = req.body.category;
    foundProduct.description = req.body.description;
    foundProduct.price = req.body.price;
    res.sendStatus(202);
  } else {
    res.sendStatus(404);
  }
});

router.post("/products", (req, res) => {
  console.log(req.body);

  products.push({
    id: uuidv4(),
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    category: req.body.category,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
  });

  res.sendStatus(201);
  console.log("NEW PRODUCT ADDED");
});

router.delete("/products/:productId", (req, res) => {
  let foundIndex = products.findIndex(
    (product) => product.id === req.params.productId
  );

  if (foundIndex === -1) {
    res.sendStatus(404);
  } else {
    products.splice(products[(foundIndex, 1)]);
    res.sendStatus(202);
  }
});

router.get("/products/category/:category", (req, res) => {
  let categoryParam = req.params.category;

  console.log(categoryParam);

  let categoryParamLower = categoryParam.toLowerCase();

  console.log(categoryParamLower);

  let lowerCProducts = products.map((element) => {
    return element.category.toLowerCase();
  });

  let foundIndex = lowerCProducts.findIndex((product) =>
    product.includes(categoryParamLower)
  );

  let productsByCategory = [];

  for (let i = 0; i < lowerCProducts.length; i++) {
    if (lowerCProducts[i].includes(categoryParamLower)) {
      productsByCategory.push(products[i]);
    }
  }

  if (foundIndex === -1) {
    res.sendStatus(404);
  } else {
    res.json(productsByCategory);
  }
});

router.get("/products/name/:name", (req, res) => {
  let nameParam = req.params.name;

  let nameParamLower = nameParam.toLowerCase();

  let lowerCProducts = products.map((element) => {
    return element.name.toLowerCase();
  });

  let foundIndex = lowerCProducts.findIndex((product) =>
    product.includes(nameParamLower)
  );

  let productsByName = [];

  for (let i = 0; i < lowerCProducts.length; i++) {
    if (lowerCProducts[i].includes(nameParamLower)) {
      productsByName.push(products[i]);
    }
  }

  if (foundIndex === -1) {
    res.sendStatus(404);
  } else {
    res.json(productsByName);
  }
});

router.get("/products/manufacturer/:manufacturer", (req, res) => {
  let manufacturerParam = req.params.manufacturer;

  let manuLower = manufacturerParam.toLowerCase();

  let lowerCProducts = products.map((element) => {
    return element.manufacturer.toLowerCase();
  });

  let foundIndex = lowerCProducts.findIndex((product) =>
    product.includes(manuLower)
  );

  let productsByManu = [];

  for (let i = 0; i < lowerCProducts.length; i++) {
    if (lowerCProducts[i].includes(manuLower)) {
      productsByManu.push(products[i]);
    }
  }

  if (foundIndex === -1) {
    res.sendStatus(404);
  } else {
    res.json(productsByManu);
  }
});

module.exports = router;
