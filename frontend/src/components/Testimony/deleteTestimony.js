import React from 'react';
import { getToken } from '../auth/auth-helper'; // Ensure this path is correct for your project structure

const API_URL = 'http://localhost:3000/testimonies';

function DeleteTestimony({ testimonyId, onSuccess }) {
  const handleDelete = async () => {
    // Ensure there's a testimonyId to work with
    if (!testimonyId) {
      console.error('No testimony ID provided for deletion.');
      return;
    }

    // Confirm with the user before proceeding with the deletion
    const confirmed = window.confirm('Are you sure you want to delete this testimony?');
    if (!confirmed) return;

    try {
      const response = await fetch(`${API_URL}/delete/${testimonyId}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + getToken(),
        },
      });

      if (!response.ok) {
        // If the server response is not ok, throw an error
        throw new Error('Failed to delete testimony');
      }

      // If deletion is successful, inform the user and execute the onSuccess callback
      alert('Testimony deleted successfully!');
      if (typeof onSuccess === 'function') {
        onSuccess();
      }
    } catch (error) {
      console.error('Error deleting testimony:', error);
      alert('Failed to delete testimony.');
    }
  };

  // Render a button that, when clicked, triggers the handleDelete function
  return (
    <button onClick={handleDelete}>Delete Testimony</button>
  );
}

export default DeleteTestimony;