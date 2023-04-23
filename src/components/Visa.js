import React from "react";
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";
import { addItemToCart } from "../api";
import { updateQuantity } from "../api";

export default function Visa({ sumPrice, cartArray }) {
  const customerId = 211263819;

  const pay = (e, data) => {
    console.log(data);
    const newCartArray = [...cartArray];
    newCartArray.map((marble) => {
      updateQuantity(marble.marble[0]._id, marble.quantity);
    });
    addItemToCart(cartArray, customerId);
    alert("Thanks for buying from us !");
  };
  console.log(cartArray);
  return (
    <div className="App">
      <VisaCard onSubmit={pay} submitBtnTxt={`Total amount ${sumPrice} ₪`} />
    </div>
  );
}
