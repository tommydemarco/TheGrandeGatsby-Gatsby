import React, { useReducer, useEffect } from "react"
import { persistState, getInitialState } from "../utils/local-storage"

const userContext = React.createContext()

const initialState = {
  user: null,
  jwt: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "SILENT_LOGIN":
      return {
        user: action.payload.user,
        jwt: action.payload.jwt,
      }
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

  useEffect(() => {
    const stateFromLocal = getInitialState("AUTH_STATE")
    if (stateFromLocal && stateFromLocal.user !== state.user) {
      dispatch({ type: "SILENT_LOGIN", payload: stateFromLocal })
    }
  }, [])

  useEffect(() => {
    persistState("AUTH_STATE", state)
  }, [state])

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {children}
    </userContext.Provider>
  )
}

export { GatsbyContext, userContext }
