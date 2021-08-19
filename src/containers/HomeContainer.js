import React, { Component } from 'react';
import Cards from '../components/Cards';
import fieldrogerdrivingwhite from '../assets/images/fieldrogerdrivingwhite.jpeg';

class HomeContainer extends Component {
  render() {
    return (
      <>
        <div className='background-image' style={{ backgroundImage: `url(${fieldrogerdrivingwhite})` }} alt="Roger driving a Horse"></div>
        <Cards />
      </>
    );
  }
}

export default HomeContainer;
