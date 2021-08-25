import React from 'react';
import rogerriding from '../assets/images/rogerriding.jpeg';
import './Login.css';

function Login({ handleOnChange, handleOnSubmit, email, password }) {
  return (
    <>
      <div className='background-image' style={{ backgroundImage: `url(${rogerriding})` }} alt="Login">
        <form className='login-form' onSubmit={handleOnSubmit}>
          <input 
            type="text" 
            name="email" 
            placeholder="email" 
            value={email}
            onChange={handleOnChange}
          /><br/>
          {/* change back to type='password' for production */}
          <input 
            type="text" 
            name="password" 
            placeholder="password" 
            value={password}
            onChange={handleOnChange}
          /><br/>
          <input 
            type="submit" 
            value="Login"
          />
        </form>
      </div>
    </>
  );
};

export default Login;