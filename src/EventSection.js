// src/EventSection.js
import React from 'react';
import './EventSection.css';

const EventSection = () => {
  return (
    <section className="event-section">
      <div className="event-date">
        <h3 className='h3'>Event Details</h3>
        <p className='section-p'>Date: March 20, 2024</p>
        <p className='section-p'>Time: 2 P.M</p>
        <p className='section-p'>Location: Green Forest</p>
      </div>
      <div className="event-description">
        <h3 className='h3'>Why Plant Trees?</h3>
        <p className='section-p'>Trees clean the air we breathe, provide habitat for wildlife, and contribute to a healthier planet. Join us in this effort to make a lasting difference in our community.</p>
      </div>
    </section>
  );
};

export default EventSection;
