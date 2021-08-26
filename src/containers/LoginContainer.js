import React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import Logout from '../components/Logout';
import PostForm from '../components/PostForm';
import PostsContainer from './PostsContainer';
import { updateLoginForm } from "../actions/loginForm.js";
import { login, logout } from "../actions/currentUser.js"

const LoginContainer = ({ loginFormData, updateLoginForm, login, currentUser }) => {

  const handleOnChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
        ...loginFormData,
        [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }
  
  const handleOnSubmit = event => {
    event.preventDefault()
    // Submit info from the form to the backend to authenticate
    // the user and, if valid, send the user back to the front end.
    // With the response, set the state.
    login(loginFormData)
  }

  return (
    <div>
      {/* Need to look at this code - rendering as undefined at first login, and then correct at roger on refresh */}
      {/* <h3 className='login-warning'> 
        {currentUser 
          ? `Welcome, ${currentUser.username}!` 
          : 'Not logged in'
        } */}
        <h3 className='login-warning'> 
        {currentUser 
          ? `Welcome!` 
          : 'Not logged in'
        }
      </h3>
      <h3 className='login-warning'>
        {currentUser 
          ? <PostForm /> 
          : 'Please Log In'
        }
      </h3>
        {currentUser ? 
          <Logout logout={logout}/> 
          :
          <Login 
            handleOnChange={handleOnChange} 
            handleOnSubmit={handleOnSubmit} 
            email={loginFormData.email}
            password={loginFormData.password}
          />
        }
        {currentUser ?
          <PostsContainer />
          : null
        }
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
