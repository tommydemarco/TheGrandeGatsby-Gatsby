import React from "react"
import ReactDOM from "react-dom"

const InfoPopup = () => {
  return ReactDOM.createPortal(
    <div className="InfoPopup">Some gibrish here</div>,
    document.querySelector("#popup")
  )
}

export default InfoPopup
