import React from "react";
import ProductList from "./ProductList";

function Jewelry({ addToCart, cart }) {
  return (
    <div>
      <h1>Bijoux</h1>
      <ProductList category="jewelery"  />
    </div>
  );
}

export default Jewelry;
