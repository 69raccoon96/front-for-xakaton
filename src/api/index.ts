import axios from 'axios';

const API = axios.create({
  baseURL: 'https://hackathoniot.herokuapp.com',
  responseType: 'json',
  withCredentials: true,
});

export { API };
