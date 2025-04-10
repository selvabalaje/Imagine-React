import React from 'react';
import './ContactUs.css';
import bgImage from '../assets/bg.jpg';

const ContactUs = () => {
  return (
    <section className="contact-section" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="contact-overlay">
        <div className="contact-container">
          <div className="contact-form">
            <h2>Contact Form</h2>
            <form>
              <div className="form-group">
                <input type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Leave your message here..." required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
