import axios from 'axios';

// Set the base URL for your reminder-related backend endpoints
const API_URL = 'http://localhost:5000/api/reminder'; 




// Function to create a new reminder
export const createReminder = async (reminderData) => {
  try {
    // Sends a POST request to the server to create a new reminder
    const response = await axios.post(API_URL, reminderData);
    // Returns the response data from the server
    return response.data;
  } catch (error) {
    // Logs any errors to the console
    console.error('Error creating reminder:', error);
    // Rethrows the error for further handling
    throw error;
  }
};




// Function to update a reminder
export const updateReminder = async (reminderId, updatedData) => {
  try {
    // Sends a PUT request to update the reminder with the given ID and data
    const response = await axios.put(`${API_URL}/${reminderId}`, updatedData);
    // Returns the updated reminder data
    return response.data;
  } catch (error) {
    // Logs any errors to the console
    console.error('Error updating reminder:', error);
    // Rethrows the error for further handling
    throw error;
  }
};




// Function to delete a reminder
export const removeReminder = async (reminderId) => {
  try {
    // Sends a DELETE request to remove the reminder with the specified ID
    const response = await axios.delete(`${API_URL}/${reminderId}`);
    // Returns the response data, typically a success message
    return response.data;
  } catch (error) {
    // Logs any errors to the console
    console.error('Error deleting reminder:', error);
    // Rethrows the error for further handling
    throw error;
  }
};