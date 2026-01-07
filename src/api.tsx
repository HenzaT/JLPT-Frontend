import axios, { type AxiosInstance } from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL as string | undefined;

const api: AxiosInstance = axios.create({
  baseURL: baseUrl,
});

export default api;
