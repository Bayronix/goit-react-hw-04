import axios from "axios";

axios.defaults.baseURL = "";

// I2D2c16iwwIjCTAyZyBcnyzgq5aZ7OGHfcmvU91Ezhk
export const Api = async () => {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos?client_id=I2D2c16iwwIjCTAyZyBcnyzgq5aZ7OGHfcmvU91Ezhk&query=car&page=1"
  );
  return response.data;
};
