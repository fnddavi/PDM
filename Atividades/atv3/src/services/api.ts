import axios, { AxiosInstance } from "axios";
import { BACKEND_URL } from "react-native-dotenv";

const api: AxiosInstance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
