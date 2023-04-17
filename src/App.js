import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Opinion from "./components/Opinion";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import About from "./components/About";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Marbles from "./components/Marbles";
import Visa from "./components/Visa";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/opinion" element={<Opinion />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/marbles" element={<Marbles />} />
          <Route path="/payment" element={<Visa />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
