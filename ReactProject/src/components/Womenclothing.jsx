import React from "react";
import ProductList from "./ProductList";

function WomenClothing({cart , addToCart}) {
  return (
    <>
      <h1>Habits femme</h1>
      <ProductList category="women's clothing"  />
    </>
  );
}

export default WomenClothing;
