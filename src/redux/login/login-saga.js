import { all, call, takeEvery } from "redux-saga/effects"
import { clearLocalStorageItem } from "../../utils/local-storage"

function* cleanLocalStorage({ payload: { storageKey } }) {
  yield call(clearLocalStorageItem, storageKey)
  yield console.log("clered local storage")
}

function* logoutWatcher() {
  yield takeEvery("LOGOUT", cleanLocalStorage)
}

export default function* loginSaga() {
  yield all([call(logoutWatcher)])
}
