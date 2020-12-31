import { combineReducers } from "redux"

import login from "./login/login-reducer"

const rootReducer = combineReducers({
  login: login,
})

export default rootReducer
