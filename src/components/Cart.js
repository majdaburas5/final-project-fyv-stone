import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "../css/Cart.css";
// import { marblesAddedToCart, addItemToCart } from "../api";
import Visa from "./Visa";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Cart({ cartArray, setCartArray }) {
  // const [marbles, setMarbles] = useState([]);
  const [sumPrice, setSumPrice] = useState(0);

  // useEffect(() => {
  //   marblesAddedToCart().then((res) => {
  //     setMarbles(res);
  //   });
  // }, []);
  // addItemToCartcart
  // console.log(cartArray);

  const handleDelete = (id) => {
    // problem to fix
    const index = cartArray.findIndex((cart) => cart._id === id);

    const updatedCartArray = [...cartArray];
    updatedCartArray.splice(index, 1);

    setCartArray(updatedCartArray);
  };

  useEffect(() => {
    let total = 0;
    if (cartArray && cartArray.length > 0) {
      cartArray.forEach((cart) => {
        total += cart.marble[0].price * cart.quantity;
      });
    }
    setSumPrice(total);
  }, [cartArray]);

  return (
    <div>
      <h1 className="cart-title">Cart</h1>
      <table className="cart-table">
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
        {cartArray &&
          cartArray.map((cart) => (
            <tr key={cart._id}>
              <td>{cart.marble[0].name}</td>
              <td>{cart.quantity}</td>
              <td>{cart.marble[0].price * cart.quantity} $</td>
              <td>
                <img
                  src={cart.marble[0].img}
                  alt={cart.marble[0].name}
                  className="cart-image"
                />
              </td>
              <td>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(cart._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        <tr>
          <th>Total Amount</th>
          <td>{sumPrice}$</td>
        </tr>
      </table>
      <br />
      <em> We have a full 1 year warranty on our marble slabs</em>
      <br />
      <br />
      <Link to="/payment" className="payment">
        <button className="button button2">Buy</button>
      </Link>
      {/* <Visa sumPrice={sumPrice} />; */}
    </div>
  );
}
