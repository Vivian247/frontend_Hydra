// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { list } from "../../datasource/api-testimony";

// const API_URL = 'http://localhost:3000/testimonies';

// function TestimonyComponent({ testimonyId }) {
//   const [testimony, setTestimony] = useState({ title: '', description: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const ListBooks = () => {
//     const [productList, setProductList] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [currentDate, setCurrentDate] = useState(new Date());
//     const [onlyShowAvailable, setOnlyShowAvailable] = useState(false);
  
//   useEffect(() => {
//     const fetchTestimony = async () => {
//       if (!testimonyId) return;
//       try {
//         const response = await fetch(`${API_URL}/get/${testimonyId}`, {
//           method: 'GET',
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + getToken(),
//           },
//         });
//         if (!response.ok) throw new Error('Failed to fetch testimony');
//         const data = await response.json();
//         setTestimony(data);
//       } catch (error) {
//         console.error('Error fetching testimony:', error);
//       }
//     };

//     fetchTestimony();
//   }, [testimonyId]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch(`${API_URL}/${testimonyId ? 'update/' + testimonyId : 'create'}`, {
//         method: testimonyId ? 'PUT' : 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + getToken(),
//         },
//         body: JSON.stringify(testimony),
//       });
//       if (!response.ok) throw new Error('Failed to save testimony');
//       alert('Testimony saved successfully!');
//     } catch (error) {
//       console.error('Error saving testimony:', error);
//       alert('Failed to save testimony.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleDelete = async () => {
//     if (!testimonyId) return;
//     const confirmed = window.confirm('Are you sure you want to delete this testimony?');
//     if (!confirmed) return;

//     try {
//       const response = await fetch(`${API_URL}/delete/${testimonyId}`, {
//         method: 'DELETE',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + getToken(),
//         },
//       });
//       if (!response.ok) throw new Error('Failed to delete testimony');
//       alert('Testimony deleted successfully!');
//     } catch (error) {
//       console.error('Error deleting testimony:', error);
//       alert('Failed to delete testimony.');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h2>{testimonyId ? 'Edit' : 'Create'} Testimony</h2>
//         <label>
//           Title:
//           <input
//             type="text"
//             value={testimony.title}
//             onChange={(e) => setTestimony({ ...testimony, title: e.target.value })}
//             required
//           />
//         </label>
//         <label>
//           Description:
//           <textarea
//             value={testimony.description}
//             onChange={(e) => setTestimony({ ...testimony, description: e.target.value })}
//             required
//           />
//         </label>
//         <button type="submit" disabled={isSubmitting}>
//           {testimonyId ? 'Update' : 'Submit'}
//         </button>
//         {testimonyId && (
//           <button type="button" onClick={handleDelete} disabled={isSubmitting}>
//             Delete
//           </button>
//         )}
//       </form>
//     </div>
//   );
// }

// export default TestimonyComponent;