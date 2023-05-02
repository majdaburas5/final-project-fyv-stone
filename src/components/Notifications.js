import React, { useState, useEffect } from "react";
import { getSpecificCustomerOrder } from "../api";
import { getUserData } from "../api";
export default function Notifications() {
  const [userData, setUserData] = useState(null);
  const [specificCustomerOrder, setSpecificCustomerOrder] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUserData();
        setUserData(data);
      } catch (error) {
        console.error("Error getting user data:", error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const customerId = userData && userData.user.id;
        const data = await getSpecificCustomerOrder(customerId);
        setSpecificCustomerOrder(data);
      } catch (error) {
        console.error("Error getting customer order:", error);
      }
    }

    if (userData) {
      fetchData();
    }
  }, [userData]);

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
                  </tr>
                ))}
              </React.Fragment>
            ))}
        </tbody>
      </table>
    </div>
  );
}
