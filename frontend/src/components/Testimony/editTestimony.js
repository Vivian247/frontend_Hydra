import React, { useState, useEffect } from 'react';
import { getToken } from '../auth/auth-helper'; 

const API_URL = 'http://localhost:3000/testimonies';

function EditTestimony({ testimonyId }) {
  const [testimony, setTestimony] = useState({ title: '', description: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchTestimony = async () => {
      try {
        const response = await fetch(`${API_URL}/get/${testimonyId}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken(),
          },
        });
        if (!response.ok) throw new Error('Failed to fetch testimony');
        const data = await response.json();
        setTestimony(data);
      } catch (error) {
        console.error('Error fetching testimony:', error);
      }
    };

    fetchTestimony();
  }, [testimonyId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTestimony({ ...testimony, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/update/${testimonyId}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + getToken(),
        },
        body: JSON.stringify(testimony),
      });
      if (!response.ok) throw new Error('Failed to update testimony');
      alert('Testimony updated successfully!');
    } catch (error) {
      console.error('Error updating testimony:', error);
      alert('Failed to update testimony.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h2>Edit Testimony</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={testimony.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={testimony.description}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" disabled={isSubmitting}>Update</button>
      </form>
    </div>
  );
}

export default EditTestimony;