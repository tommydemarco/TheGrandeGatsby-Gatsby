import React, { useEffect, useState } from "react"

import "./ToastMessage.scss"

const ToastMessage = ({ title, message, type, icon, additionalClass }) => {
  const classes = ["toast"]

  const [active, setActive] = useState(false)

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
    setTimeout(() => setActive(true), 2000)
  }, [])

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

export default ToastMessage
