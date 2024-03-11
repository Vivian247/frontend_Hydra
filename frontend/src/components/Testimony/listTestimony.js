import React, { useState, useEffect } from 'react';
import '../../styles/TestimonyStyles.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { listTestimonies } from '../../api/Testimonies.js';
import TestimonyModel from '../../models/testimonyModel.js';


export function Testimonies() {
  const [testimonies, setTestimonies] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added for loading state

  useEffect(() => {
    const fetchTestimonies = async () => {
      setIsLoading(true); // Start loading
      try {
        const data = await listTestimonies();
        console.log(data);
        // const models = data.map(item => new TestimonyModel(
        //   item.id,
        //   item.firstName,
        //   item.lastName,
        //   item.title,
        //   item.content,
        //   new Date(item.datePosted),
        //   item.rating,
        //   item.isVisible,
        // ));
        setTestimonies(data);
      } catch (error) {
        console.error('There was an error fetching the testimonies:', error);
      } finally {
        setIsLoading(false); // End loading
      }
    };

    fetchTestimonies();
  }, []);

  return (
    <div className="testimonies-container">
      <div className="testimonies-header">TESTIMONIES</div>
      {isLoading ? (
        <div>Loading testimonies...</div>
      ) : (
        <ul className="testimonies-list">
          {testimonies.map((testimony) => (
            <li key={testimony.id} className="testimony-item" style={!testimony.isVisible ? { display: 'none' } : {}}>
              <div className="testimony-avatar"></div> {/* Placeholder for avatar */}
              <div className="testimony-content">
                <div className="testimony-text">
                  <div className="testimony-title">{testimony.title}</div>
                  <div className="testimony-description">{testimony.content}</div>
                </div>
                <div className="testimony-rating">
                  {/* Display rating here, possibly as stars */}
                </div>
              </div>
              <div className="testimony-actions">
                {/* Icons for edit/delete actions */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}