import axios from 'axios';
import { useContext } from 'react';
import UserContext from '../context/UserInfo';

const services = axios.create({
  baseURL: process.env.BASE_API || 'http://localhost:3000/api',
  timeout: 10000,
});

services.interceptors.request.use(request => {
  const token = localStorage.getItem('authToken');
  request.headers['Authorization'] = `Bearer ${token}`;

  return request;
});

export default services;
