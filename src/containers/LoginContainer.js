import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import Logout from '../components/Logout';
import PostForm from '../components/PostForm';

// import { getCurrentUser } from '../actions/currentUser.js';
// NEW
import { updateLoginForm } from "../actions/loginForm.js";
import { login, logout } from "../actions/currentUser.js"

// import { login, getCurrentUser } from "../actions/currentUser.js";
// import rogerriding from '../assets/images/rogerriding.jpeg';

const LoginContainer = ({ loginFormData, updateLoginForm, login, history, currentUser, loggedIn }) => {

  // handleOnChange
  const handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
        ...loginFormData,
        [name]: value
    }
    updateLoginForm(updatedFormInfo)
    console.log(updatedFormInfo)
  }
  
  // handleOnSubmit
  const handleOnSubmit = event => {
    event.preventDefault()
    // Submit info from the form to the backend to authenticate
    // the user and, if valid, send the user back to the front end.
    // With the response, set the state.
    login(loginFormData)
  }
    console.log(loginFormData)
  return (
    <div>
      {/* 'Welcome Roger' OR 'Not logged in' =  */}
      <h3> 
        { currentUser ? `Welcome, ${currentUser.username}!` : 'Not logged in'}
      </h3>
      {/* Post component OR 'Please Log In' =  */}
      <h3>
        { currentUser ? <PostForm /> : 'Please Log In'}
      </h3>
      {/* If logged in = Logout component. If not logged in = Login component. */}
      {
        currentUser ? 
        <Logout logout={logout}/> 
        :
        <Login 
          handleOnChange={handleOnChange} 
          handleOnSubmit={handleOnSubmit} 
          email={loginFormData.email}
          password={loginFormData.password}
          // username={loginFormData.username}
        />
      }
      {/* <Login /> */}
      {/* COMMENTED OUT FOR NOW... */}
      {/* <div className='background-image' style={{ backgroundImage: `url(${rogerriding})` }} alt="Login">
        <form onSubmit={handleOnSubmit}>
          <input 
            type="text" 
            name="email" 
            placeholder="email" 
            value={loginFormData.email}
            onChange={handleOnChange}
          /><br/> */}
          {/* change back to type='password' for production */}
          {/* <input 
            type="text" 
            name="password" 
            placeholder="password" 
            value={loginFormData.password}
            onChange={handleOnChange}
          /><br/>
          <input 
            type="submit" 
            value="Login"
          />
        </form>
      </div> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(LoginContainer);
