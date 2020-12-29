import { all, call } from "redux-saga/effects"

function* testFunction() {
  yield console.log("hello from the sagas")
}

export default function* loginSaga() {
  yield all([call(testFunction)])
}
