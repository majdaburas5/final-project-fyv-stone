import axios from "axios";
const URL = "http://localhost:3001";

export async function addToCart(id) {
  const response = await axios.get(`${URL}/marble/${id}`);
  return response.data;
}
