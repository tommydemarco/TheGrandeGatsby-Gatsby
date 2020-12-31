import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { removeAuthMessage } from "../../redux/login/login-actions"

import "./ToastMessage.scss"

const ToastMessage = ({
  id,
  title,
  message,
  type,
  icon,
  additionalClass,
  removeAuthMessage,
}) => {
  const classes = ["toast"]

  const [active, setActive] = useState(true)

  if (active) {
    classes.push("active")
  }

  if (typeof additionalClass === "string" && additionalClass.length) {
    classes.push(additionalClass)
  }

  if (typeof type === "string" && type.length) {
    classes.push("toast--" + type)
  }

  useEffect(() => {
    setTimeout(() => setActive(true), 1000)
  }, [])

  useEffect(() => {
    if (active) {
      return
    } else {
      setTimeout(() => {
        removeAuthMessage(54)
      }, 500)
    }
  }, [active])

  return (
    <div className={classes.join(" ")}>
      <span
        className="toast__x"
        onClick={() => {
          setActive(false)
        }}
      >
        &#10005;
      </span>
      <i className={"fa " + icon + " toast__icon"}></i>
      <div className="toast__text">
        <span className="toast__title">{title}</span>
        <span className="toast__message">{message}</span>
      </div>
    </div>
  )
}

ToastMessage.defaultProps = {
  icon: "fa-diamond",
  type: "success",
}

const mapDispatchToProps = dispatch => {
  return {
    removeAuthMessage: id => dispatch(removeAuthMessage(id)),
  }
}

export default connect(null, mapDispatchToProps)(ToastMessage)
