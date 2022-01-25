import axios, { AxiosInstance } from "axios";

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const api: AxiosInstance = axios.create({
  baseURL: `${BASE_URL}`
});

export {api, BASE_URL};
