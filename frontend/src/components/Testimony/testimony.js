import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Testimony() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get('/api/testimony') // Adjust the URL based on your API endpoint
      .then(response => {
        setLogs(response.data);
      })
      .catch(error => console.error('Error fetching water logs:', error));
  }, []);

  return (
    <div>
      <h1>Hello! Welcome to Hydra with Vivian the Programmer</h1>
      <h2>Testimonies Components </h2>
      <ul>
        {logs.map(log => (
          <li key={log.id}>{log.description} - {log.date}</li>
        ))}
      </ul>
    </div>
  );
}


export default Testimony;