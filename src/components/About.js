import React from 'react';
// import Bios from './Bios';

function About() {
  return (
    <>
      <div className='background-image about-image'>
      </div>
      <div>
        <h1>About Us:</h1>
        <p>Nestled in the West River Valley, West River Stables is a full-service equestrian facility, owned and managed by Roger Poitras and Howard Osgood. English riding lessons are available for every level from beginners to advanced riders</p>
        <h2>Our Mission:</h2>
        <p>To land on Mars or discover a new planet.</p>
      </div>
      <div>
        <h2>Our Story:</h2>
        <p>Founded one million years ago by Dinosaurs. The Dinosaurs developed cows. Then they brought in the Osgood's to run the Dairy Farm.</p>
      </div>
      <div>
        <h2>Our History:</h2>
        <p>One day the Dairy Farm became the Horse Farm.</p>
      </div>
      <div>
        <h2>Bios:</h2>
        <p>Howard was born and raised on the farm, raised by the Dinosaurs. They taught him how to be one of the best hayers around.</p>
        <p>Roger was born in a snowstorm in Canada. As a baby he sledded down from Canada to Westminster, VT. Then in the Spring he rode his horse to Brookline, VT.</p>
        {/* <Bios /> */}
      </div>
    </>
  );
};

export default About;
