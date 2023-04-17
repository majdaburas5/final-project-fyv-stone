import React from "react";
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";

export default function Visa({ sumPrice }) {
  const pay = (e, data) => {
    console.log(data);
    alert("Thanks for buying from us !");
  };
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
