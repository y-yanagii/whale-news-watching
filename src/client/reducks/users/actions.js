export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const setErrorMessageAction = (users) => {
  return {
    type: "SET_ERROR_MESSAGE",
    payload: users
  }
}