import { v4 as uuidv4 } from "uuid"

export const loggedIn = user => {
  return {
    type: "LOGGED_IN",
    payload: { user, id: uuidv4() },
  }
}

export const logInFailed = () => {
  return {
    type: "LOGIN_FAILED",
    payload: { id: uuidv4() },
  }
}

export const removeAuthMessage = id => {
  return {
    type: "REMOVE_AUTH_MESSAGE",
    payload: id,
  }
}
