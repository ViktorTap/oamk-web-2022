const { v4: uuidv4 } = require("uuid");
const products = require("./products");
const users = require("./users");

const invoices = [
  {
    id: uuidv4(),
    date: "10-03-2021",
    product: products[0],
    buyer: users[0].firstName + " " + users[0].lastName,
    total: products[0].price,
  },
  {
    id: uuidv4(),
    date: "17-02-2021",
    product: products[1],
    buyer: users[1].firstName + " " + users[1].lastName,
    total: products[1].price,
  },
  {
    id: uuidv4(),
    date: "06-03-2021",
    product: products[2],
    buyer: users[2].firstName + " " + users[2].lastName,
    total: products[2].price,
  },
  {
    id: uuidv4(),
    date: "10-03-2021",
    product: products[3],
    buyer: users[0].firstName + " " + users[0].lastName,
    total: products[3].price,
  },
  {
    id: uuidv4(),
    date: "23-04-2021",
    product: products[4],
    buyer: users[1].firstName + " " + users[1].lastName,
    total: products[4].price,
  },
  {
    id: uuidv4(),
    date: "06-03-2021",
    product: products[5],
    buyer: users[2].firstName + " " + users[2].lastName,
    total: products[5].price,
  },
];

module.exports = invoices;
