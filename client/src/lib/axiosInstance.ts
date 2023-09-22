import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com',
});

// Retrieve the access token from localStorage
const accessToken = localStorage.getItem('accessToken');

if (accessToken) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

export default instance;