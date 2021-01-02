import React from "react"

import TheHeader from "../TheHeader"
import TopBar from "../TopBar"

import "./GlobalHeader.scss"

const GlobalHeader = () => {
  return (
    <header className="GlobalHeader">
      <TopBar />
      <TheHeader />
    </header>
  )
}

export default GlobalHeader
