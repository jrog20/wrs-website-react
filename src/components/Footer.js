import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/about'>About</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Services</h2>
            <Link to='/services'>Services</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/contact'>Contact</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social</h2>
            <Link to='https://www.facebook.com/West-River-Stables-104209966321965'>Facebook</Link>
            <Link to='/posts'>Posts</Link>
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