import axios from 'axios';

const services = axios.create({
  baseURL: process.env.BASE_API || 'http://localhost:3000/api',
  timeout: 10000,
});

services.interceptors.request.use(request => {
  const token = localStorage.getItem('authToken');
  if (token) {
    request.headers['Authorization'] = `Bearer ${token}`;
  }
  return request;
});

export default services;
