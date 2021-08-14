import React from 'react';
import './Footer.css';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the WRS newsletter to receive event updates
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            {/* <Button buttonStyle='btn--outline'>Subscribe</Button> */}
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Barn Staff</Link>
            <Link to='/'>Location</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Services</h2>
            <Link to='/'>Boarding</Link>
            <Link to='/'>Riding Lessons</Link>
            <Link to='/'>Driving Lessons</Link>
            <Link to='/'>Training</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Location</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social</h2>
            {/* Add functionality to submit videos? */}
            <Link to='/'>Submit Video</Link>
            {/* Add functionality to submit videos? */}
            <Link to='/'>WRS Videos</Link>
            <Link to='https://www.facebook.com/West-River-Stables-104209966321965'>Facebook</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              WRS
              <i className='fab fa-typo3' />
            </Link>
          </div>
          <small className='website-rights'>WRS © 2021 | Designed and Developed by Jaime Rogstad</small>
          <div className='social-icons'>
            {/* Not working */}
            <Link
              className='social-icon-link facebook'
              to='https://www.facebook.com/West-River-Stables-104209966321965'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;