import React, { useState, useReducer } from "react"

const userContext = React.createContext({ user: null, jwt: null })

const GatsbyContext = ({ children }) => {
  return <userContext.Provider value={}>{children}</userContext.Provider>
}
