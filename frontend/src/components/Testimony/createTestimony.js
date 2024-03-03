// import React, { useState } from 'react';
// import { getToken } from '../auth/auth-helper';
// import TestimonyModel from '../models/TestimonyModel';
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { create } from "../../datasource/api-testimony";
// import { jwtDecode } from "jwt-decode";
// //import "./addBookStyles.css";


// const API_URL = 'http://localhost:3000/testimonies';

// //Functional component for adding books
// const CreateTestimony = () => {
//   let navigate = useNavigate();
//   let [product, setProduct] = useState(
//     new TestimonyModel("", "", "", "", "", 0, "", "", "", "")
//   );



// function CreateTestimony() {
//   const [testimony, setTestimony] = useState({ title: '', description: '' });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setTestimony({ ...testimony, [name]: value });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);
//     try {
//       const response = await fetch(`${API_URL}/create`, {
//         method: 'POST',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer ' + getToken(),
//         },
//         body: JSON.stringify(testimony),
//       });
//       if (!response.ok) throw new Error('Failed to create testimony');
//       alert('Testimony created successfully!');
//       setTestimony({ title: '', description: '' }); // Reset form
//     } catch (error) {
//       console.error('Error creating testimony:', error);
//       alert('Failed to create testimony.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         First Name:
//         <input type="text" name="firstName" value={testimony.firstName} onChange={handleChange} required />
//       </label>
//       <label>
//         Last Name:
//         <input type="text" name="lastName" value={testimony.lastName} onChange={handleChange} required />
//       </label>
//       <label>
//         Title:
//         <input type="text" name="title" value={testimony.title} onChange={handleChange} required />
//       </label>
//       <label>
//         Content:
//         <textarea name="content" value={testimony.content} onChange={handleChange} required />
//       </label>
//       {/* Additional fields here */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default TestimonyForm;