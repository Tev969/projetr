
import React from "react";
import ProductList from "./ProductList";

function Electronics({addToCart , cart }) {
  return (
    <>
      <h1>Électroniques</h1>
      <ProductList category="electronics" />
    </>
  );
}

export default Electronics;
