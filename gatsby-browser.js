import React from "react"
import { Helmet } from "react-helmet"

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
