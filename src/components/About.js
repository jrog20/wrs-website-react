import React from 'react';
import driving2012 from '../assets/images/rainbow.jpeg';
import Bios from './Bios';

function About() {
  return (
    <>
      <div className='background-image' style={{ backgroundImage: `url(${driving2012})` }} alt="Horse">
      </div>
      <Bios />
    </>
  );
};

export default About;
