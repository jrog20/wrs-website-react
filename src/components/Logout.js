import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser"
import './Login.css';

const Logout = ({ logout }) => {
  return (
    <div className="logout">
      <form onSubmit={(event) => {
        event.preventDefault()
        logout()
      }
      }>
        <input
          type="submit"
          value="Logout"
        />
      </form>
    </div>
  )
}

export default connect(null, { logout })(Logout)
