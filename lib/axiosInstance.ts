import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://api.example.com', // Optional: Uncomment and set a base URL if needed
  // timeout: 10000, // Optional: Uncomment and set a timeout if needed
  // headers: { 'Content-Type': 'application/json' }, // Optional: Uncomment and set default headers if needed
});

export default axiosInstance;
