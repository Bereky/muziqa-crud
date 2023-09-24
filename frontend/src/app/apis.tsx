import axios from "axios";

const getSongs = async () => {
  const response = await axios.get("get-accounts");

  if (response.data) {
    localStorage.setItem("userAccounts", JSON.stringify(response.data));
  }

  return response.data;
};

const api = {
  getSongs,
};

export default api;
