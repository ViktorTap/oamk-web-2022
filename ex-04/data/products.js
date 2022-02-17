const { v4: uuidv4 } = require("uuid");

const products = [
  {
    id: uuidv4(),
    name: "Mega 005",
    manufacturer: "Sonya",
    category: "consoles",
    description: "The one and only",
    price: "550",
    image: "some image",
  },
  {
    id: uuidv4(),
    name: "27 -inch Screen 001",
    manufacturer: "Samasungi",
    category: "monitors",
    description: "Big screen, you know",
    price: "350",
    image: "some image",
  },
  {
    id: uuidv4(),
    name: "oPhone X",
    manufacturer: "Aplappa",
    category: "phones",
    description: "a-la Phone",
    price: "750",
    image: "some image",
  },
  {
    id: uuidv4(),
    name: "Titan 007",
    manufacturer: "Sonya",
    category: "consoles",
    description: "Just amazing",
    price: "600",
    image: "some image",
  },
  {
    id: uuidv4(),
    name: "32 -inch Screen 002",
    manufacturer: "Samasungi",
    category: "monitors",
    description: "Just a bigger screen, you know",
    price: "400",
    image: "some image",
  },
  {
    id: uuidv4(),
    name: "oPhone 99",
    manufacturer: "Aplappa",
    category: "phones",
    description: "a-la next gen. Phone",
    price: "1050",
    image: "some image",
  },
];

module.exports = products;
