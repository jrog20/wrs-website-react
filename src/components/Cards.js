import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>We hope you will join us!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/haying2.jpeg'
              text='Learn more about the history of our farm'
              label='About'
              path='/about'
            />
            <CardItem
              src='images/rogerriding.jpeg'
              text='Services: Boarding, Lessons, Training, and more'
              label='Services'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/rogerlesson.jpeg'
              text='Contact Us'
              label='Contact'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;