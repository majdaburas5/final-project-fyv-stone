import React, { useEffect,useState } from "react";
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";
import { addItemToCart } from "../api";
import { updateQuantity } from "../api";
import { getUserData } from "../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Visa({ sumPrice, cartArray, setCartArray }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    getUserData().then(data => {
      setUserData(data);
    }).catch(error => {
      console.error('Error getting user data:', error);
    });
  }, []);

  const customerId = userData && userData.user.id;

  const pay = (e, data) => {
    console.log(data);
    const newCartArray = [...cartArray];
    newCartArray.map((marble) => {
      updateQuantity(marble.marble[0]._id, marble.quantity);
    });
    addItemToCart(cartArray, customerId);
    toast.success("Thanks for buying from us !");
  };
 
  return (
    <div className="App">
      <VisaCard onSubmit={pay} submitBtnTxt={`Total amount ${sumPrice} ₪`} />
    </div>
  );
}
