import React, { useContext } from "react"
import { userContext } from "../../context/context"

import Button from "../Button"

const LogoutPopup = ({ onClickClose }) => {
  const { state, dispatch } = useContext(userContext)

  const handleLogout = () => {}
  return (
    <div className="LogoutPopup">
      <h3 className="LogoutPopup__title">Confirm Log out</h3>
      <p className="LogoutPopup__message">Are you sure you want to log out?</p>
      <div className="LogoutPopup__button-container">
        <Button functionOnClick={}></Button>
      </div>
    </div>
  )
}

export default LogoutPopup
