import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api', // URL backend
  withCredentials: true, // Izinkan pengiriman cookie
});

export default api;