import React from 'react';
import youngstudentshowing from '../assets/images/youngstudentshowing.jpeg';

function Contact() {
  return (
    <>
      <div className='background-image resize-image' style={{ backgroundImage: `url(${youngstudentshowing})` }} alt="Horse">
      </div>
      <h1>Contact Us</h1>
      <h2>Address</h2>
      <h3>102 Hill Rd, Newfane, VT 05345</h3>
      <h2>Phone</h2>
      <h3>(802) 365-7668</h3>
      <h2>Email</h2>
      <h3>westriverstables@comcast.net</h3>
    </>
  );
};

export default Contact;
