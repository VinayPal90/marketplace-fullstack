import axios from 'axios';

// --- CONFIGURATION ---
// Local Testing (Mobile ke liye IPv4 use karein)
const LOCAL_URL = 'http://192.168.1.34:5000/api'; 

// Deployment (Backend Render/Vercel link yahan daalein)
const PROD_URL = 'https://your-backend-service.onrender.com/api'; 

// SWITCH: True = Production (Live), False = Local
const isProduction = false; 

const API = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://marketplace-fullstack-backend.onrender.com/api',
});

// Request Interceptor: Token automatic add karne ke liye
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token'); // Mobile mein AsyncStorage use hota hai, but basic test ke liye ye theek hai
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
