import { resetLoginForm } from "./loginForm.js"

// synchronous action creators
export const setCurrentUser = ({user}) => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

//async action creators
export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3001/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        console.log(resp)
        dispatch(setCurrentUser(resp))
      }
    })
    .catch(console.log)
  }
}

export const login = (credentials, history) => {
  return dispatch => {
    return fetch("http://localhost:3001/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response))
          dispatch(resetLoginForm())
          history.push('/')
        }
      })
      .catch(console.log)
  }
}

// NEED TO ADD LOGOUT ACTION HERE

export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3001/logout", {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(resp => alert(resp.message))
  }  
}
