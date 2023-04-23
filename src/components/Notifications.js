import React, { useState, useEffect } from "react";
import { getSpecificCustomerOrder } from "../api";

export default function Notifications() {
  const customerId = "211263819";
  const [specificCustomerOrder, setSpecificCustomerOrder] = useState([]);

  useEffect(() => {
    const fetchCustomerOrder = async () => {
      getSpecificCustomerOrder(customerId).then((res) => {
        setSpecificCustomerOrder(res);
      });
    };
    fetchCustomerOrder();
  }, []);

  console.log(specificCustomerOrder);

  return (
    <div>
      <h1 className="order-title">My Orders</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order Number</th>
            <th>Marble Name</th>
            <th>Marble Code</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {specificCustomerOrder.length > 0 &&
            specificCustomerOrder.map((order, index) => (
              <React.Fragment key={index}>
                {order.cart.map((cartArray, cartIndex) => (
                  <tr key={cartIndex}>
                    <td>{order.orderNumber}</td>
                    <td>{cartArray.marble[0].name}</td>
                    <td>{cartArray.marble[0].code}</td>
                    <td>
                      <img
                        src={cartArray.marble[0].img}
                        alt=""
                        className="img"
                      />
                    </td>
                    <td>{cartArray.quantity}</td>
                    <td>{order.orderDate}</td>
                    <td>{order.status}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
}
