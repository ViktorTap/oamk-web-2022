const { v4: uuidv4 } = require("uuid");

const users = [
  {
    id: uuidv4(),
    firstName: "Andriano",
    lastName: "Tomagucci",
    age: 35,
  },
  {
    id: uuidv4(),
    firstName: "Bilbo",
    lastName: "Second",
    age: 65,
  },
  {
    id: uuidv4(),
    firstName: "Anne",
    lastName: "Kolmas",
    age: 25,
  },
];

module.exports = users;
