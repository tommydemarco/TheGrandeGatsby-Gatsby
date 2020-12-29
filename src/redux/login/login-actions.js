export const loggedIn = user => {
  return {
    type: "LOGGED_IN",
    payload: user,
  }
}

export const logInFailed = () => {
  return {
    type: "LOGIN_FAILED",
  }
}
