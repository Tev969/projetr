import React from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, removeItemCart  , decrementQuantity} from "../Store/ShopingCartSlice";

function Cart({ }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shoppingCart.items);
  const cartLength = useSelector((state) => state.shoppingCart.items.length);

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id))
  }

  const handleIncrement = (id) => {
dispatch(incrementQuantity(id))
  }

  const handleRemove = (id) => {
    dispatch(removeItemCart(id))
  }
  useEffect(() => {
    return () => {};
  }, [items]);

  return (
    <div>
      <h1>Panier</h1>
      {cartLength === 0 ? (
        <p>Le panier est vide.</p>
      ) : (
        <ul>
          {items.map((product) => (
            <li key={product.id}>
              <h3>{product.title}</h3>
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "50px" }}
              />
              <p>Prix : ${product.price * product.quantity}</p>
              <p>Quantité : {product.quantity} </p>
              <Button onClick={() => handleIncrement(product.id)}> + 1</Button>
              <Button onClick={() => handleDecrement(product.id)}> - 1</Button>
              <Button onClick={() => handleRemove(product.id)}> Supprimer tout</Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
