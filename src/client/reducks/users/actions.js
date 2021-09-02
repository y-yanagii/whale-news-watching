// export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
// export const setErrorMessageAction = (users) => {
//   return {
//     type: "SET_ERROR_MESSAGE",
//     payload: {
//       errorMessages: users.errorMessages
//     }
//   }
// }
export const SET_LOGIN_INFO = "SET_LOGIN_INFO";
export const signInAction = (users) => {
  return {
    type: "SET_LOGIN_INFO",
    payload: {
      name: users.name,
      email: users.email
    }
  }
}
