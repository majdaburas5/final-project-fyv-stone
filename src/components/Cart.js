import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "../css/Cart.css";
import Visa from "./Visa";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Cart({
  cartArray,
  updateCartArray,
  sumPrice,
  setSumPrice,
}) {
  const handleDelete = (id) => {
    const index = cartArray.findIndex((product) => product.marble._id === id);

    const updatedCartArray = [...cartArray];
    updatedCartArray.splice(index, 1);

    updateCartArray(updatedCartArray);
  };

  useEffect(() => {
    let total = 0;
    if (cartArray && cartArray.length > 0) {
      cartArray.forEach((cart) => {
        if (cart.marble[0] && cart.marble[0].price && cart.quantity) {
          total += cart.marble[0].price * cart.quantity;
        }
      });
    }
    setSumPrice(total);
  }, [cartArray]);
  return (
    <div>
      <h1 className="cart-title">Cart</h1>
      <table className="cart-table">
        <tbody>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
          {cartArray &&
            cartArray.map((cart) => (
              <tr key={cart.marble[0]._id}>
                <td>{cart.marble[0].name}</td>
                <td>{cart.quantity}</td>
                <td>{cart.marble[0].price * cart.quantity} ₪</td>
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
            <td>{sumPrice}₪</td>
          </tr>
        </tbody>
      </table>
      <br />
      <em> We have a full 1 year warranty on our marble slabs</em>
      <br />
      <br />
      <Link to="/payment" className="payment">
        <button className="button button2">Buy</button>
      </Link>
    </div>
  );
}
