import * as Actions from "./actions";
import initialState from "../store/initialState";

export const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessages: [...action.payload.errorMessages]
      }
    default:
      return state
  }
}