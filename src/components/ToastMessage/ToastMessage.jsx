import React from "react"

import "./ToastMessage.scss"

const ToastMessage = ({ title, message, type, icon, additionalClass }) => {
  const classes = ["toast"]

  if (typeof additionalClass === "string" && additionalClass.length) {
    classes.push(additionalClass)
  }

  if (typeof type === "string" && type.length) {
    classes.push("toast--" + type)
  }

  return (
    <div className={classes.join(" ")}>
      <i className={"fa " + icon}></i>
      <div className="toast__text">
        <span>{title}</span>
        <span>{message}</span>
      </div>
    </div>
  )
}

ToastMessage.defaultProps = {
  icon: "fa-diamond",
  type: "success",
}

export default ToastMessage
