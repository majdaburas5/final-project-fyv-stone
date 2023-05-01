import React, { useState, useEffect } from "react";
import { getCustomerOrder } from "../api";
import { useParams } from "react-router-dom";
import "../manager-css/OrderDetails.css";

export default function OrderDetails() {
  const { orderNumber } = useParams();
  const [customerOrder, setCustomerOrder] = useState([]);

  useEffect(() => {
    const fetchCustomerOrder = async () => {
      await getCustomerOrder(orderNumber).then((res) => {
        setCustomerOrder(res);
      });
    };
    fetchCustomerOrder();
  }, [orderNumber]);

  return (
    <div>
      <h1 className="order-title">Customer Order</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Marble Name</th>
            <th>Marble Code</th>
            <th>Image</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {customerOrder.length > 0 &&
            customerOrder[0].cart.map((order, index) => (
              <tr key={index}>
                <td>{orderNumber}</td>
                <td>{order.marble[0].name}</td>
                <td>{order.marble[0].code}</td>
                <td>
                  <img src={order.marble[0].img} className="img" alt="" />
                </td>
                <td>{order.quantity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
