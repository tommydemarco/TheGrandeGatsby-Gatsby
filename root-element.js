import React from "react"
import { GatsbyContext } from "./src/context/context"

import TheHeader from "./src/components/TheHeader"

import "./static/global.scss"

export const rootElement = ({ element }) => {
  return (
    <>
      <GatsbyContext>
        <TheHeader />
        {element}
      </GatsbyContext>
    </>
  )
}
