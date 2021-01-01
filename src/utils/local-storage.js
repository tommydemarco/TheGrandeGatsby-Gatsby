export const persistState = (storageKey, state) => {
  window.localStorage.setItem(storageKey, JSON.stringify(state))
}

export const getInitialState = storageKey => {
  const savedState = window.localStorage.getItem(storageKey)
  try {
    if (!savedState) {
      return undefined
    }
    return JSON.parse(savedState)
  } catch (e) {
    console.error("Error while retirving the auth states")
    return undefined
  }
}

export const clearLocalStorageItem = () => {
  window.localStorage.removeItem("name")
}
