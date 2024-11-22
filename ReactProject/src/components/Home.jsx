import React from "react";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";
function Home({addToCart , cart}) {

  return (
    <div style={{ position: "relative", padding: "20px" }}>
      <h1>Produits</h1>
      <ProductList category="jewelery" />
      <ProductList category="electronics"  />
      <ProductList category="men's clothing" />
      <ProductList category="women's clothing" />
    </div>
  );
}

export default Home;
