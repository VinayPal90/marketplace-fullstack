import axios from 'axios';

// LOCAL testing ke liye apna IPv4 daalo
// DEPLOYMENT ke liye apni Render/Vercel link yahan daal dena
// const BASE_URL = 'http://192.168.1.41:5000/api';   
const BASE_URL = 'https://marketplace-fullstack-backend.onrender.com/';
// const BASE_URL = 'https://your-backend-api.onrender.com/api'; // Deployment ke waqt ise uncomment karna

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 5000
});

export default API;
