import React, { useState } from 'react';
import backgroundImage from '../assets/689487d185cbf80dc1fb4087fd0c0ae2.jpg';
import blueWaterImage from '../assets/contact.jpg';
import '../styles/contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log(name, email, subject, message);
  };

  return (
    <div className="outermost-container" style={{ backgroundImage: `url(${blueWaterImage})` }}>
      <div className="middle-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="contact-container">
          <h1>Contact Us</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;