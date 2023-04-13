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
