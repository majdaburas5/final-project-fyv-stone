import React from "react";
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";
import { addItemToCart } from "../api";

export default function Visa({ sumPrice, cartArray }) {
  const customerId = 123;
  const pay = (e, data) => {
    console.log(data);
    addItemToCart(cartArray, customerId);
    alert("Thanks for buying from us !");
  };
  console.log(cartArray);
  return (
    <div className="App">
      <VisaCard
        onSubmit={pay}
        frontCardColor="linear-gradient(50deg, #f3c680, hsla(179,54%,76%,1))"
        backCardColor="wheat"
        submitBtnColor="wheat"
        submitBtnTxt={`Total amount ${sumPrice}`}
      />
    </div>
  );
}
