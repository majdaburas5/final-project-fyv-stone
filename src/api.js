import axios from "axios";
import { useHistory } from "react-router-dom";
const URL = "http://localhost:3001";

export async function marblesFromDB() {
  const response = await axios.get(`${URL}/getMarbles`);
  return response.data;
}

export async function addItemToCart(marble, customerId) {
  await axios.post(`${URL}/cart/addToCart`, {
    marble,
    customerId,
  });
}

export async function getSpecificCustomerOrder(id) {
  const response = await axios.get(`${URL}/getSpecificCustomerOrder/${id}`);
  return response.data;
}

export async function addToCart(id) {
  const response = await axios.get(`${URL}/marble/${id}`);
  return response.data;
}

export async function updateQuantity(id, updatedQuantity) {
  await axios.put(`${URL}/marble/${id}`, { quantity: updatedQuantity });
}

export async function marblesAddedToCart() {
  const response = await axios.get(`${URL}/marblesAddedToCart`);
  return response.data;
}

export async function getCustomer(id) {
  const response = await axios.get(`${URL}/getCustomer/${id}`);
  return response.data;
}

export async function deleteMarble(id) {
  await axios.delete(`${URL}/deleteMarble/${id}`);
}

export async function addMarble(
  codeValue,
  typeValue,
  priceValue,
  quantityValue,
  styleValue,
  nameValue,
  imgValue,
  colorValue
) {
  await axios.post(`${URL}/addMarble`, {
    code: codeValue,
    type: typeValue,
    price: priceValue,
    quantity: quantityValue,
    style: styleValue,
    name: nameValue,
    img: imgValue,
    color: colorValue,
  });
}

export async function ManagersFromDB() {
  const response = await axios.get(`${URL}/getManagers`);
  return response.data;
}

export async function showMarbleByColor(color) {
  const response = await axios.get(`${URL}/showMarbleByColor/${color}`);
  return response.data;
}

export async function registerCustomerUser(newCustomer) {
  await axios.post(`${URL}/customerUser`, newCustomer);
}

export async function loginUser(user) {
  await axios.post(`${URL}/login`, user);
}

export async function getCustomers(user) {
  return await axios.get(`${URL}/customers`, user);
}

export async function updateMarble(id, updatedPrice, updatedQuantity) {
  await axios.put(`${URL}/updateMarble/${id}`, {
    price: updatedPrice,
    quantity: updatedQuantity,
  });
}

export async function logout(setIsLoggedIn) {
  try {
    const token = localStorage.getItem("token");
    await axios.post(`${URL}/logout`, null, {
      headers: { Authorization: `Bearer ${token}` },
    });
    localStorage.removeItem("token");
    localStorage.setItem("authenticated", false);
    setIsLoggedIn(false);
    // redirect to login page
  } catch (err) {
    console.error(err);
  }
}
export async function getCustomerOrder(orderNumber) {
  const response = await axios.get(`${URL}/getCustomerOrder/${orderNumber}`);
  return response.data;
}
