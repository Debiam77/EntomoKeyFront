// src/axiosConfig.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // Substitua pela URL do seu backend
});

export default axiosInstance;
