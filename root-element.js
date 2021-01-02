import React from "react"
import { Provider } from "react-redux"
import store from "./src/redux/store"

import { GatsbyContext } from "./src/context/context"

import GlobalHeader from "./src/components/GlobalHeader"

import "./static/global.scss"

export const rootElement = ({ element }) => {
  return (
    <Provider store={store}>
      <GatsbyContext>
        <GlobalHeader />
        {element}
      </GatsbyContext>
    </Provider>
  )
}
