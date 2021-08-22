import React from 'react';
import haying2 from '../assets/images/haying2.jpeg';
import Bios from './Bios';

function About() {
  return (
    <>
      <div className='background-image' style={{ backgroundImage: `url(${haying2})` }} alt="Horse">
      </div>
      <Bios />
    </>
  );
};

export default About;
