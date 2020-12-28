import React from "react"

import TheHeader from "./src/components/TheHeader"

import "./static/global.scss"

export const wrapRootElement = ({ element }) => {
  return (
    <>
      <TheHeader />
      {element}
    </>
  )
}
