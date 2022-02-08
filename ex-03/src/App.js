import "./App.css";
import ItemList from "./components/ItemList";
import ProductsData from "./data/products";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="product-item">
        <ItemList />
      </div>
    </div>
  );
}

export default App;
