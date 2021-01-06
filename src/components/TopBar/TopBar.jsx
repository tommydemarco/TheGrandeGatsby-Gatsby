import React, { useState, useContext } from "react"
import { userContext } from "../../context/context"

import "./TopBar.scss"

const TopBar = () => {
  const [logoutPopup, setLogoutPopup] = useState(false)

  const { state } = useContext(userContext)
  return (
    <nav className="TopBar">
      <ul className="TopBar__container">
        <li className="TopBar__element TopBar__element--email">
          <i className="fa fa-envelope-o TopBar__icon"></i>
          <span className="TopBar__text">info@thegrandegatsby.app.netlify</span>
        </li>
        {state.user ? (
          <li className="TopBar__element">
            <i className="fa fa-sign-out TopBar__icon"></i>
            <span className="TopBar__text">Logout</span>
          </li>
        ) : (
          <li className="TopBar__element">
            <i className="fa fa-sign-in TopBar__icon"></i>
            <span className="TopBar__text">Login</span>
          </li>
        )}
        <li className="TopBar__element">
          <i className="fa fa-adjust TopBar__icon"></i>
          <span className="TopBar__text">Night mode</span>
        </li>
      </ul>
    </nav>
  )
}

export default TopBar
