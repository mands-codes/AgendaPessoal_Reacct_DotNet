import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5959/api/',
  });

export default api;