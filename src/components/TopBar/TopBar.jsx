import React, { useState, useContext } from "react"
import { userContext } from "../../context/context"

const TopBar = () => {
  const [logoutPopup, setLogoutPopup] = useState(false)

  const { state } = useContext(userContext)
  return (
    <nav className="TopBar">
      <ul className="TopBar__container">
        <li className="TopBar__element TopBar__element--email">
          <i className="fa fa-mail"></i>
          <span className="TopBar__text">info@thegrandegatsby.app.netlify</span>
        </li>
        {state.user ? (
          <li className="TopBar__element">
            <i className="fa fa-login"></i>
            <span className="TopBar__text">Log out</span>
          </li>
        ) : (
          <li className="TopBar__element">
            <i className="fa fa-login"></i>
            <span className="TopBar__text">log in</span>
          </li>
        )}
        <li className="TopBar__element">
          <i className="fa fa-mail"></i>
          <span className="TopBar__text">info@thegrandegatsby.app.netlify</span>
        </li>
      </ul>
    </nav>
  )
}

export default TopBar
