import axios from "axios";
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

export async function deleteMarble(id) {
  await axios.delete(`${URL}/deleteMarble/${id}`);
}

export async function addMarble(newMarble) {
  await axios.post(`${URL}/addMarble`, { newMarble });
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
