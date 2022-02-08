import "./App.css";
import Item from "./components/Item";
import ProductsData from "./data/products";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <div className="product-item">
        <Item />
      </div>
    </div>
  );
}

export default App;
