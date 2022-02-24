const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const invoices = require("../data/invoices");
const users = require("../data/users");
const products = require("../data/products");

router.get("/invoices", (req, res) => {
  res.json(invoices);
});

router.post("/invoices", (req, res) => {
  console.log(req.body);

  invoices.push({
    id: uuidv4(),
    buyer: req.body.buyer,
    date: req.body.date,
    product: req.body.product,
    total: req.body.price,
  });

  res.sendStatus(201);
});

router.get("invoices/:invoiceId", (req, res) => {
  let foundIndex = invoices.findIndex(
    (invoice) => invoice.id === req.params.invoiceId
  );

  if (foundIndex === -1) {
    res.sendStatus(404);
  } else {
    res.json(invoices[foundIndex]);
  }
});

router.get("/invoices/:userId", (req, res) => {
  let foundIndex = users.findIndex((user) => user.id === req.params.userId);

  let userID = req.params.userId;

  let invoicesArr = [];
  let totalPrice = 0;

  for (let i = 0; i < invoices.length; i++) {
    if (userID === invoices[i].buyerID) {
      invoicesArr.push(invoices[i]);
    }
  }

  for (let x = 0; x < invoicesArr.length; x++) {
    totalPrice += parseInt(invoicesArr[x].total);
  }

  console.log(totalPrice);

  if (foundIndex === -1) {
    res.sendStatus(404);
  } else {
    res.json(invoicesArr);
  }
});

module.exports = router;
