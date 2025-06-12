import React, { useState } from 'react';
import Title from '../components/Title';
import NewsletterBox from '../components/NewsletterBox';
import { assets } from '../assets/assets';

const Contact = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200); // Reset colour after 200ms
  };

  return (
    <div className="contact-page" style={{ padding: '40px 20px' }}>
      <Title text1="CONTACT" text2="US" />

      <div
        className="contact-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        <img
          src={assets.contact_img}
          alt="Contact"
          style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
        />

        <div style={{ textAlign: 'center', lineHeight: '1.8' }}>
          <p><b>Our Store</b></p>
          <p>Willms Station<br />123 Fashion Avenue, New York, NY 10001</p>
          <p>Phone: +1-234-567-8900<br />Email: contact@foreverfashion.com</p>
          <p><b>Careers at Forever</b></p>
          <p>Learn more about our team and job opportunities below.</p>
          <button
            onClick={handleClick}
            style={{
              marginTop: '15px',
              padding: '10px 20px',
              backgroundColor: isClicked ? '#333' : '#000', // darker gray when clicked
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
          >
            Explore Jobs
          </button>
        </div>
      </div>

      <div className="newsletter-box" style={{ marginTop: '60px' }}>
        <NewsletterBox />
      </div>
    </div>
  );
};

export default Contact;
