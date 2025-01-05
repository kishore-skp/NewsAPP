// src/services/apiService.js
import axios from 'axios';

// Base URL of the backend server
const API_URL = 'http://localhost:3000/api';  // Adjust the base URL if needed

// Create an axios instance with custom configurations (e.g., base URL, headers)
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add any other common headers here, like Authorization token
  },
});

// A generic function to make an API call
const makeRequest = async (method, endpoint, data = null) => {
  try {
    const response = await axiosInstance({
      method,              // The HTTP method (GET, POST, PUT, DELETE)
      url: endpoint,       // The endpoint (e.g., '/save', '/getData')
      data,                // The data (if applicable)
    });

    return response.data;  // Return the response data
  } catch (error) {
    console.error('API Request Error:', error);
    throw error;  // Rethrow the error so the calling function can handle it
  }
};

// Common API methods
const apiService = {
  get: (endpoint) => makeRequest('get', endpoint),
  post: (endpoint, data) => makeRequest('post', endpoint, data),
  delete: (endpoint) => makeRequest('delete', endpoint),
};

export default apiService;
