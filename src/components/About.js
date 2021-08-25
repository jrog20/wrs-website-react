import React from 'react';
import haying2 from '../assets/images/haying2.jpeg';
import Bios from './Bios';

function About() {
  return (
    <>
      <div className='background-image' style={{ backgroundImage: `url(${haying2})` }} alt="Horse">
      </div>
      <div>
        <h2>Our Mission:</h2>
        <p>Need content...</p>
      </div>
      <div>
        <h2>Our Story:</h2>
        <p>Need content...</p>
      </div>
      <div>
        <h2>Our History:</h2>
        <p>Need content...</p>
      </div>
      <div>
        <h2>Bios:</h2>
        <p><Bios /></p>
      </div>
    </>
  );
};

export default About;
