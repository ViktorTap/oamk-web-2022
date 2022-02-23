const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const invoices = require("../data/invoices");

router.get("/invoices", (req, res) => {
  res.json(invoices);
});

// router.post("/users", (req, res) => {
//   console.log(req.body);

//   users.push({
//     id: uuidv4(),
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     age: req.body.age,
//   });

//   res.sendStatus(201);
// });

module.exports = router;
