import React from 'react';
import rogerriding from '../assets/images/rogerriding.jpeg';

function Login({ loginFormData, handleOnChange, handleOnSubmit, email, password }) {
  return (
    <>
      <div className='background-image' style={{ backgroundImage: `url(${rogerriding})` }} alt="Login">
      {/* <LoginForm /> */}
        <form onSubmit={handleOnSubmit}>
          <input 
            type="text" 
            name="email" 
            placeholder="email" 
            // Changed - this is correct?
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