import axios from 'axios';

// create axios instance
const services = axios.create({
  baseURL: process.env.BASE_API || 'http://localhost:3000/api',
  timeout: 10000,
});

// Add authorization header for every request
services.interceptors.request.use(request => {
  const token = localStorage.getItem('authToken');
  request.headers['Authorization'] = `Bearer ${token}`;
  return request;
});

export default services;
