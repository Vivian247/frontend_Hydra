// Import the getToken function for Authorization
import { getToken } from '../components/auth/auth-helper';
import axios from 'axios';

// API_URL should be set to the base URL of your testimony-related backend endpoints
const API_URL = 'http://localhost:3000/testimonies';

// Axios instance with default headers
const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// Automatically add the Authorization header to every request
axiosInstance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers['Authorization'] = 'Bearer ' + token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Function to create a new testimony
const createTestimony = async (testimonyData) => {
  try {
    const response = await axiosInstance.post('/create', testimonyData);
    return response.data;
  } catch (err) {
    console.log('Error creating testimony:', err);
    throw err;
  }
};

// Function to get a testimony by its ID
const getTestimonyById = async (testimonyId) => {
  try {
    const response = await axiosInstance.get(`/get/${testimonyId}`);
    return response.data;
  } catch (err) {
    console.log('Error fetching testimony:', err);
    throw err;
  }
};

// Function to update a testimony
const updateTestimony = async (testimonyId, updatedData) => {
  try {
    const response = await axiosInstance.put(`/update/${testimonyId}`, updatedData);
    return response.data;
  } catch (err) {
    console.log('Error updating testimony:', err);
    throw err;
  }
};

// Function to delete a testimony
const removeTestimony = async (testimonyId) => {
  try {
    const response = await axiosInstance.delete(`/delete/${testimonyId}`);
    return response.data;
  } catch (err) {
    console.log('Error deleting testimony:', err);
    throw err;
  }
};

// Function to list all testimonies
const listTestimonies = async () => {
  try {
    const response = await axiosInstance.get('/');
    return response.data;
  } catch (err) {
    console.log('Error listing testimonies:', err);
    throw err;
  }
};
// Export the functions to use them in other parts of your application
export { createTestimony, getTestimonyById, updateTestimony, removeTestimony, listTestimonies };