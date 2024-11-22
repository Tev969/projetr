import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Jewelry from "./Jewelry";
import Electronic from "./Electronics";
import MenClothing from "./Menclothing";
import Womenclothing from "./Womenclothing";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";

function Router() {
  return (
    <BrowserRouter>
      <Header notification={length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jewelery" element={<Jewelry />} />
        <Route path="/electronics" element={<Electronic />} />
        <Route path="/men's clothing" element={<MenClothing />} />
        <Route path="/women's clothing" element={<Womenclothing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
