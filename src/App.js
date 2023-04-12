import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
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
import $ from "jquery";

function App() {
  const URL = "http://localhost:3001";
  const [marbles, setMarbles] = useState([]);
  const [marblesByColor, setMarblesByColor] = useState([]);

  function MarblesFromDB() {
    axios
      .get(`${URL}/getMarbles`)
      .then((res) => setMarbles(res.data))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    MarblesFromDB();
  }, [marbles]);

  function deleteMarble(id) {
    axios.delete(`${URL}/deleteMarble/${id}`);
  }

  function addMarble(newMarble) {
    axios.post(`${URL}/addMarble`, { newMarble });
  }

  function showMarbleByColor(color) {
    $.ajax({
      url: `${URL}/showMarbleByColor/${color}`,
      type: "GET",
      success: (data) => {
        setMarblesByColor(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  // function ShowTransactionByMonth(month) {
  //   axios
  //     .get(`${URL}/showTransactionByMonth/${month}`)
  //     .then((res) => setTransactionsByMonth(res))
  //     .catch((err) => console.log(err));
  // }

  // useEffect(() => {
  //   ShowTransactionByMonth();
  // }, []);

  // function sumByCategory() {
  //   return axios.get(`${URL}/sumByCategory`);
  // }

  // const amoutEachCategory = sumByCategory().then((result) => {
  //   const categoriesAmounts = result.data.reduce((item, current) => {
  //     item.push({
  //       category: current._id,
  //       amount: current.total_amount,
  //     });
  //     return item;
  //   }, []);

  //   return categoriesAmounts;
  // });

  // async function balance() {
  //   return await axios.get(`${URL}/sumAmount`);
  // }

  // const balanceAmount = balance().then((result) => {
  //   return result.data[0].total_amount;
  // });

  return (
    <Router>
      <div className="App">
        <NavBar />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products marbles={marbles} />} />
          <Route
            path="/opinion"
            element={
              <Opinion
                showMarbleByColor={showMarbleByColor}
                marblesByColor={marblesByColor}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
