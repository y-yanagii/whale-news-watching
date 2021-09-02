import { createSelector } from "reselect";

const usersSelector = (state) => state.users;

export const getErrorMessages = createSelector(
  [usersSelector],
  state => state.errorMessages
);