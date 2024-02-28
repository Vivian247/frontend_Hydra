import axios from 'axios';

// Base URL for the progress report-related backend endpoints
const API_URL = 'http://localhost:5000/api/progressReport'; 



// Function to create a new progress report
export const createProgressReport = async (progressReportData) => {
  try {
    // Sends a POST request to create a new progress report with the provided data
    const response = await axios.post(API_URL, progressReportData);
    // Returns the response data, typically including success message and the created progress report details
    return response.data;
  } catch (error) {
    console.error('Error creating progress report:', error);
    throw error; // Rethrows the error for further handling
  }
};




// Function to update an existing progress report
export const updateProgressReport = async (reportId, updatedData) => {
  try {
    // Sends a PUT request to update the progress report identified by reportId with new data
    const response = await axios.put(`${API_URL}/${reportId}`, updatedData);
    // Returns the updated progress report data
    return response.data;
  } catch (error) {
    console.error('Error updating progress report:', error);
    throw error; // Rethrows the error for further handling
  }
};




// Function to delete a progress report
export const removeProgressReport = async (reportId) => {
  try {
    // Sends a DELETE request to remove the progress report identified by reportId
    const response = await axios.delete(`${API_URL}/${reportId}`);
    // Returns the response data, typically a success message
    return response.data;
  } catch (error) {
    console.error('Error deleting progress report:', error);
    throw error; // Rethrows the error for further handling
  }
};