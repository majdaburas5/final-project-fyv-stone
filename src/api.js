import axios from "axios";
const URL = "http://localhost:3001";



export async function MarblesFromDB() {
  const response = await axios.get(`${URL}/getMarbles`);
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
  console.log(newCustomer);
  await axios.post(`${URL}/customerUser`, newCustomer );
}

export async function loginUser(user) {
  await axios.post(`${URL}/login`, user );
}

export async function getCustomers(user) {
  return await axios.get(`${URL}/customers`, user );
}
