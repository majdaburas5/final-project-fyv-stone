import React from "react";
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";
import { addItemToCart } from "../api";
import { updateQuantity } from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Visa({ sumPrice, cartArray, setCartArray }) {
  const customerId = 211263819;

  const pay = (e, data) => {
    console.log(data);
    const newCartArray = [...cartArray];
    newCartArray.map((marble) => {
      updateQuantity(marble.marble[0]._id, marble.quantity);
    });
    addItemToCart(cartArray, customerId);
    toast.success("Thanks for buying from us !");
  };
  console.log(cartArray);
  return (
    <div className="App">
      <VisaCard onSubmit={pay} submitBtnTxt={`Total amount ${sumPrice} ₪`} />
    </div>
  );
}
