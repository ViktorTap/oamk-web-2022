const { v4: uuidv4 } = require("uuid");
const products = require("./products");
const users = require("./users");

const invoices = [
  {
    id: uuidv4(),
    buyer: users[0].firstName + " " + users[0].lastName,
    buyerID: users[0].id,
    date: "10-03-2021",
    product: products[0],
    total: products[0].price,
  },
  {
    id: uuidv4(),
    buyer: users[1].firstName + " " + users[1].lastName,
    buyerID: users[1].id,
    date: "17-02-2021",
    product: products[1],
    total: products[1].price,
  },
  {
    id: uuidv4(),
    buyer: users[2].firstName + " " + users[2].lastName,
    buyerID: users[2].id,
    date: "06-03-2021",
    product: products[2],
    total: products[2].price,
  },
  {
    id: uuidv4(),
    buyer: users[0].firstName + " " + users[0].lastName,
    buyerID: users[0].id,
    date: "10-03-2021",
    product: products[3],
    total: products[3].price,
  },
  {
    id: uuidv4(),
    buyer: users[1].firstName + " " + users[1].lastName,
    buyerID: users[1].id,
    date: "23-04-2021",
    product: products[4],
    total: products[4].price,
  },
  {
    id: uuidv4(),
    buyer: users[2].firstName + " " + users[2].lastName,
    buyerID: users[2].id,
    date: "06-03-2021",
    product: products[5],
    total: products[5].price,
  },
];

module.exports = invoices;
