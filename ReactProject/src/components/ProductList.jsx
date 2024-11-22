// ProductList.js
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import {
  Button,
  Badge,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, toggleCart } from "../Store/ShopingCartSlice";

function ProductList({ category }) {
  const cartLength = useSelector((state) => state.shoppingCart.items.length);
  console.log(cartLength);

  const dispatch = useDispatch();

  const handleAddItem = (product) => {
    dispatch(addItemToCart(product));
  };

  const handleClick = () => {
    dispatch(toggleCart());
  };

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des produits :", error);
      });
  }, [category]);

  return (
    <div>
         <SearchBar></SearchBar>
      <Button
        onClick={() => handleClick()}
        variant="contained"
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          backgroundColor: "#007bff",
          color: "white",
        }}
      >
        <Badge
          badgeContent={cartLength}
          color="secondary"
          style={{ position: "absolute", top: "-5px", right: "-10px" }}
        />
        Panier
      </Button>
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          listStyle: "none",
          padding: 0,
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <Card key={product.id} sx={{ maxWidth: 245 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={product.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary" }}
                ></Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => handleAddItem(product)} size="small">
                  Ajouter au panier
                </Button>
              </CardActions>
            </Card>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
