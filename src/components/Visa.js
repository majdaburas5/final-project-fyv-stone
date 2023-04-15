import React from "react";
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";

export default function Visa({ sumPrice }) {
  const pay = (e, data) => {
    console.log(data);
    alert("Thanks for buying from us !");
  };

  return (
    <div className="App">
      <em>The total amount to pay {sumPrice} $</em>
      <VisaCard onSubmit={pay} />
    </div>
  );
}
