import React, { useContext } from "react"
import { userContext } from "../../context/context"
import Link from "gatsby-link"

import "./SideNav.scss"

const SideAuth = () => {
  const { state } = useContext(userContext)

  const loginIconClasses = ["SideNav__icon", "fa"]

  if (state.user !== null) {
    loginIconClasses.push("fa-user")
  } else {
    loginIconClasses.push("fa-diamond")
  }

  return (
    <nav className="SideNav">
      <Link className="SideNav__element" to="/login">
        <i className={loginIconClasses.join(" ")}></i>
      </Link>
      <div className="SideNav__element">
        <i className={"SideNav__icon fa fa-phone"}></i>
      </div>
      <div className="SideNav__element">
        <i className={"SideNav__icon fa fa-leaf"}></i>
      </div>
    </nav>
  )
}

export default SideAuth
