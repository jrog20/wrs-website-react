import React from 'react';
import youngstudentshowing from '../assets/images/youngstudentshowing.jpeg';

function Contact() {
  return (
    <>
      <div className='background-image resize-image' style={{ backgroundImage: `url(${youngstudentshowing})` }} alt="Horse">
      </div>
      <h1>Contact Us</h1>
      <div className='flex-container'>
        <div>
          <h2>Address</h2>
          <h3>102 Hill Rd, Newfane, VT 05345</h3>
        </div>
        <div>
          <h2>Phone</h2>
          <h3>(802) 365-7668</h3>
        </div>
        <div>
          <h2>Email</h2>
          <h3>westriverstables@comcast.net</h3>
        </div>
      </div>
    </>
  );
};

export default Contact;
