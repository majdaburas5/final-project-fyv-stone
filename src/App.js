import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {
  const URL = "http://localhost:3001";
  // const [transactions, setTransactions] = useState([]);
  // const [transactionsByMonth, setTransactionsByMonth] = useState([]);

  // function TransactionsFromDB() {
  //   axios
  //     .get(`${URL}/transactions`)
  //     .then((res) => setTransactions(res.data))
  //     .catch((err) => console.log(err));
  // }
  // useEffect(() => {
  //   TransactionsFromDB();
  // }, [transactions]);

  // function deleteTransaction(id) {
  //   axios.delete(`${URL}/deleteTransaction/${id}`);
  // }

  // function ShowTransactionByMonth(month) {
  //   axios
  //     .get(`${URL}/showTransactionByMonth/${month}`)
  //     .then((res) => setTransactionsByMonth(res))
  //     .catch((err) => console.log(err));
  // }

  // useEffect(() => {
  //   ShowTransactionByMonth();
  // }, []);

  // function addTransaction(newTransaction) {
  //   axios.post(`${URL}/addTransaction`, { newTransaction });
  // }

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

  // return (
  //   <Router>
  //     <div className="App">
  //       <NavBar />
  //       <br />
  //       <Routes>
  //         <Route
  //           path="/"
  //           element={
  //  <Home />
  //           }
  //         />
  //         <Route
  //           path="/operations"
  //           element={<Operations addTransaction={addTransaction} />}
  //         />
  //         <Route
  //           path="/balance"
  //           element={<Breakdown amoutEachCategory={amoutEachCategory} />}
  //         />
  //       </Routes>
  //     </div>
  //   </Router>
  // );
}
export default App;
