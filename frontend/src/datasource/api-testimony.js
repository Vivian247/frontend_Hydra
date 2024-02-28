// Import axios for making HTTP requests
import axios from 'axios';

// API_URL should be set to the base URL of your testimony-related backend endpoints
const API_URL = 'http://localhost:5000/api/testimony'; 



// Function to create a new testimony
export const createTestimony = async (testimonyData) => {
  try {
    // Sends a POST request to the server to create a new testimony
    const response = await axios.post(API_URL, testimonyData);
    // Returns the response data from the server
    return response.data;
  } catch (error) {
    // Logs any errors to the console
    console.error('Error creating testimony:', error);
    // Rethrows the error for further handling
    throw error;
  }
};



// Function to get a testimony by its ID
export const getTestimonyById = async (testimonyId) => {
  try {
    // Sends a GET request to fetch a testimony by its ID
    const response = await axios.get(`${API_URL}/${testimonyId}`);
    // Returns the fetched testimony data
    return response.data;
  } catch (error) {
    // Logs any errors to the console
    console.error('Error fetching testimony:', error);
    // Rethrows the error for further handling
    throw error;
  }
};



// Function to update a testimony
export const updateTestimony = async (testimonyId, updatedData) => {
  try {
    // Sends a PUT request to update the testimony with the given ID and data
    const response = await axios.put(`${API_URL}/${testimonyId}`, updatedData);
    // Returns the updated testimony data
    return response.data;
  } catch (error) {
    // Logs any errors to the console
    console.error('Error updating testimony:', error);
    // Rethrows the error for further handling
    throw error;
  }
};



// Function to delete a testimony
export const removeTestimony = async (testimonyId) => {
  try {
    // Sends a DELETE request to remove the testimony with the specified ID
    const response = await axios.delete(`${API_URL}/${testimonyId}`);
    // Returns the response data, typically a success message
    return response.data;
  } catch (error) {
    // Logs any errors to the console
    console.error('Error deleting testimony:', error);
    // Rethrows the error for further handling
    throw error;
  }
};
