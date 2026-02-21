import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api',  // This is correct
  timeout: 5000, // 5 second timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to see what's being sent
API.interceptors.request.use(request => {
  console.log('🚀 Request:', request.method?.toUpperCase(), request.url);
  return request;
});

// Add response interceptor to see errors clearly
API.interceptors.response.use(
  response => {
    console.log('✅ Response:', response.status, response.config.url);
    return response;
  },
  error => {
    if (error.code === 'ECONNABORTED') {
      console.error('⏰ Timeout - Backend not responding');
    } else if (error.response) {
      // Server responded with error
      console.error('❌ Server Error:', {
        status: error.response.status,
        url: error.config.url,
        data: error.response.data
      });
    } else if (error.request) {
      // Request made but no response
      console.error('❌ No response - Backend may be down');
    } else {
      console.error('❌ Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default API;