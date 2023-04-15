import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import "../css/Cart.css";

export default function Cart({ cartArray, setCartArray }) {
  console.log(cartArray);
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
            <tr key={cart.marble[0]._id}>
              <td>{cart.marble[0].name}</td>
              <td>{cart.quantity}</td>
              <td>{cart.marble[0].price * cart.quantity}</td>
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
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
}
