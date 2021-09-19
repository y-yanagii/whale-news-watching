export const SET_LOGIN_INFO = "SET_LOGIN_INFO";
export const  signInAction = (users) => {
  return {
    type: "SET_LOGIN_INFO",
    payload: {
      username: users.username,
      email: users.email,
      isSignedIn: true,
    }
  }
}

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
  // returnでreducersにtypeとpayloadを渡す
  return {
    type: "SIGN_OUT",
    payload: {
      isSignedIn: false,
      uid: "",
      username: "",
      email: "",
      errorMessages: []
    }
  }
}
