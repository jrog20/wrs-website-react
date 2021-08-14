import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser"

const Logout = ({ logout, history }) => {
  return (
    <div className="Logout">
      {/* <form onSubmit={logout}> */}
      {/* changed to this: */}
      <form onSubmit={(event) => {
        event.preventDefault()
        logout()
        // history.push('/')
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
