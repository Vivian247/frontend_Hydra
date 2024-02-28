import axios from 'axios';

// Base URL for water log-related backend endpoints
const API_URL = 'http://localhost:5000/api/waterLog'; 



// Function to create a new water log entry
export const createWaterLog = async (waterLogData) => {
  try {
    // Sends a POST request to create a new water log entry with the provided data
    const response = await axios.post(API_URL, waterLogData);
    // Returns the response data, typically including a success message and the created water log entry details
    return response.data;
  } catch (error) {
    console.error('Error creating water log entry:', error);
    throw error; // Rethrows the error for further handling
  }
};




// Function to get water log entries by user ID
export const getWaterLogByUserId = async (userId) => {
  try {
    // Sends a GET request to retrieve water log entries for a specific user by their user ID
    const response = await axios.get(`${API_URL}/user/${userId}`);
    // Returns the water log entries for the user
    return response.data;
  } catch (error) {
    console.error('Error fetching water log entries:', error);
    throw error; // Rethrows the error for further handling
  }
};




// Function to update a water log entry
export const updateWaterLog = async (waterLogId, updatedData) => {
  try {
    // Sends a PUT request to update the water log entry identified by waterLogId with new data
    const response = await axios.put(`${API_URL}/${waterLogId}`, updatedData);
    // Returns the updated water log entry data
    return response.data;
  } catch (error) {
    console.error('Error updating water log entry:', error);
    throw error; // Rethrows the error for further handling
  }
};




// Function to delete a water log entry
export const removeWaterLog = async (waterLogId) => {
  try {
    // Sends a DELETE request to remove the water log entry identified by waterLogId
    const response = await axios.delete(`${API_URL}/${waterLogId}`);
    // Returns the response data, typically a success message
    return response.data;
  } catch (error) {
    console.error('Error deleting water log entry:', error);
    throw error; // Rethrows the error for further handling
  }
};