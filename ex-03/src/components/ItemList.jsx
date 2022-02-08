import React from "react";
import ProductsData from "../data/products";
import Item from "./Item";

function ItemList() {
  return (
    <div>
      {ProductsData.map((p) => (
        <Item name={p.name} image={p.image} price={p.price} key={p.uuid} />
      ))}
      ;
    </div>
  );
}

export default ItemList;
