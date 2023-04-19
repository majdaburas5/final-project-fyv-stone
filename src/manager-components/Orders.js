import React, { useState, useEffect } from "react";
import { marblesAddedToCart, getCustomer } from "../api";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "../manager-css/Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [customerNames, setCustomerNames] = useState([]);
  const [customerPhones, setCustomerPhones] = useState([]);

  useEffect(() => {
    marblesAddedToCart().then((res) => {
      setOrders(res);
      const promises = res.map((order) => getCustomer(order.customerId));
      Promise.all(promises).then((customers) => {
        const names = customers.map((customer) => customer[0].name);
        const phones = customers.map((customer) => customer[0].phone);
        setCustomerNames(names);
        setCustomerPhones(phones);
      });
    });
  }, []);

  return (
    <div>
      <h1 className="order-title">Orders</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id}>
              <Link
                to={`/order-details/${order.orderNumber}`}
                className="order-number"
              >
                <td>{order.orderNumber}</td>
              </Link>
              <td>{order.orderDate}</td>
              <td>{customerNames[index]}</td>
              <td>{customerPhones[index]}</td>
              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
