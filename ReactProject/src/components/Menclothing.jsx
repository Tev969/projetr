import React from "react";
import ProductList from "./ProductList";

function MenClothing({addToCart , cart}) {
  return (
    <>
      <h1>Habit hommes</h1>
      <ProductList category="men's clothing" />
    </>
  );
}

export default MenClothing;
