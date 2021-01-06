import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

import "./InfoPopup.scss"

const InfoPopup = ({ visible, setPopupVisible }) => {
  const [baseClasses, setBaseClasses] = useState(["InfoPopup"])

  useEffect(() => {
    if (baseClasses.length === 1 && visible) {
      setBaseClasses(prevState => [...prevState, "visible"])
    }
  }, [baseClasses])

  return ReactDOM.createPortal(
    <div
      className={baseClasses.join(" ")}
      onClick={() => setPopupVisible(false)}
    >
      <div className="InfoPopup__content-container">
        This Gallery was made using CSS grids!
      </div>
    </div>,
    document.querySelector("#popup")
  )
}

export default InfoPopup
