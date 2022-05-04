import axios from 'axios';

export const api = axios.create({
    baseURL: "http://localhost:2509/api",
  });

