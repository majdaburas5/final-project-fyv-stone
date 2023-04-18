import React, { useState, useEffect } from "react";
import { marblesAddedToCart, getCustomer } from "../api";
import "../manager-css/Orders.css";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    marblesAddedToCart().then((res) => {
      setOrders(res);
    });
  }, []);
  console.log(orders);

  const getCustomerName = async function (id) {
    await getCustomer(id).then((res) => {
      console.log(res[0].name);
      return res[0].name;
    });
  };

  const getCustomerPhone = async function (id) {
    await getCustomer(id).then((res) => {
      console.log(res[0].phone);
      return res[0].phone;
    });
  };

  return (
    <div>
      <h1 className="order-title">Orders</h1>
      <table className="order-table">
        <tr>
          <th>Order Number</th>
          <th>Date</th>
          <th>Customer Name</th>
          <th>Phone</th>
          <th>Status</th>
        </tr>
        {orders &&
          orders.map((order) => (
            <tr key={order._id}>
              <td>{order.orderNumber}</td>
              <td>{order.orderDate}</td>
              <td>{() => getCustomerName(order.customerId)}</td>
              <td>{() => getCustomerPhone(order.customerId)}</td>
              <td>{order.status}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}
