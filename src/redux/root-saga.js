import { all, call } from "redux-saga/effects"

import loginSaga from "./login/login-saga.js"

export default function* rootSaga() {
  yield all([call(loginSaga)])
}
