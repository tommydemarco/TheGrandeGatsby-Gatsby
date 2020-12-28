import React, { useState, useReducer } from "react"

const userContext = React.createContext({ user: null, jwt: null })

const initialState = {
  user: null,
  jwt: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload.user,
        jwt: action.payload.jwt,
      }
    case "LOGOUT":
      return {
        user: null,
        jwt: null,
      }
    default:
      return state
  }
}

const GatsbyContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  )
}

export { GatsbyContext, userContext }
