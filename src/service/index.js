import axios from 'axios';
import { useAuthStore } from '@/stores/counter';


const instance = axios.create({
  baseURL: 'http://api.eagma.co.tz/',
  headers: {
    'Content-type': 'application/json',
  },
});
instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirect to the login page or handle unauthorized access
      // Example: this.$router.push('/login');
    }
    return Promise.reject(error);
  }
);

// Set default headers with the token from Pinia
const token = localStorage.getItem('authToken');
if (token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default instance;


// Add an interceptor to handle 401 responses



