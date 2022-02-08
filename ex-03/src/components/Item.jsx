import React from "react";

function Item({ name, image, price }) {
  return (
    <div className="item-container">
      <h2>{name}Tuotteen nimi</h2>
      <img src={image} alt="product-name" />
      <h3>Hinta {price} </h3>
    </div>
  );
}

export default Item;
