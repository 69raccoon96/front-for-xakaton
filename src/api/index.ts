import axios from 'axios';

const API = axios.create({
  baseURL: 'https://taskiot.herokuapp.com',
  responseType: 'json',
  withCredentials: true,
});

export { API };
