import React from "react";
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";
import { addItemToCart } from "../api";
import { updateQuantity } from "../api";

export default function Visa({ sumPrice, cartArray, setCartArray }) {
  const customerId = 123;

  const pay = (e, data) => {
    console.log(data);
    const newCartArray = [...cartArray];
    newCartArray.map((marble) => {
      console.log(marble.marble[0]._id);
      console.log(marble.quantity);
      updateQuantity(marble.marble[0]._id, marble.quantity);
      // console.log(marble.quantity);
    });
    // const qty = newCartArray.find((qty) => qty === marble.name);
    // newCartArray[marbleName].quantity -= quantity;
    // setUsers(newCartArray);
    addItemToCart(cartArray, customerId);
    alert("Thanks for buying from us !");
  };
  console.log(cartArray);
  return (
    <div className="App">
      <VisaCard onSubmit={pay} submitBtnTxt={`Total amount ${sumPrice}`} />
    </div>
  );
}
