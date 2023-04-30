import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Opinion from "./components/Opinion";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import About from "./components/About";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Marbles from "./components/Marbles";
import Visa from "./components/Visa";
import Notifications from "./components/Notifications";
import ManagerPage from "./manager-components/ManagerPage";
import Managment from "./manager-components/Managment";
import EditMarble from "./manager-components/EditMarble";
import AddNewMarble from "./manager-components/AddNewMarble";
import Orders from "./manager-components/Orders";
import OrderDetails from "./manager-components/OrderDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartArray, setCartArray] = useState([]);
  const [sumPrice, setSumPrice] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );
  const [userType, setUserType] = useState("");

  useEffect(() => {}, [isLoggedIn, userType]);

  const updateCartArray = function (arr) {
    setCartArray(arr);
  };
  return (
    <Router>
      <div className="App">
        <NavBar
          userType={userType}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />
        <ToastContainer />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/opinion" element={<Opinion />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartArray={cartArray}
                updateCartArray={updateCartArray}
                sumPrice={sumPrice}
                setSumPrice={setSumPrice}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/login"
            element={
              <Login setUserType={setUserType} setIsLoggedIn={setIsLoggedIn} />
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/marbles"
            element={
              <Marbles
                updateCartArray={updateCartArray}
                cartArray={cartArray}
                isLoggedIn={isLoggedIn}
                userType={userType}
              />
            }
          />
          <Route
            path="/payment"
            element={
              <Visa
                cartArray={cartArray}
                setCartArray={setCartArray}
                sumPrice={sumPrice}
              />
            }
          />
          <Route path="/manager/home-page" element={<ManagerPage />} />
          <Route path="/managment" element={<Managment />} />
          <Route path="/edit/:marbleId" element={<EditMarble />} />
          <Route path="/add-new-marble" element={<AddNewMarble />} />
          <Route path="/orders" element={<Orders />} />
          <Route
            path="/order-details/:orderNumber"
            element={<OrderDetails />}
          />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
        <br />
        <br />
        <br />
        <Footer isLoggedIn={isLoggedIn} />
      </div>
    </Router>
  );
}
export default App;
