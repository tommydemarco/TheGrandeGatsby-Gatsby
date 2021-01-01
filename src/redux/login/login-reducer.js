const INITIAL_STATE = {
  loginMessages: [],
}

const STANDARD_TEXTS = {
  loginSuccess:
    "Hello there again, we are happy to see you again! Have a good one on the website",
  loginFail:
    "We are sorry, but the process of authentication has failed, try again!",
}

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGGED_IN":
      return {
        ...state,
        loginMessages: [
          ...state.loginMessages,
          {
            id: action.payload.id,
            user: action.payload.user,
            text: STANDARD_TEXTS.loginSuccess,
          },
        ],
      }
    case "LOGIN_FAILED":
      return {
        ...state,
        loginMessages: [
          ...state.loginMessages,
          {
            id: action.payload.id,
            icon: "fa-warning",
            title: "Oops, something went wrong",
            message: STANDARD_TEXTS.loginFail,
            type: "warning",
          },
        ],
      }
    case "REMOVE_AUTH_MESSAGE":
      return {
        ...state,
        loginMessages: state.loginMessages.filter(message => {
          return message.id === action.payload.id
        }),
      }
    default:
      return state
  }
}

export default login
