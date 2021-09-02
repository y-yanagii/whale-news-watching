import { createSelector } from "reselect";

const usersSelector = (state) => state.users;

export const getErrorMessages = createSelector(
  [usersSelector],
  state => state.errorMessages
);

export const getUserId = createSelector(
  [usersSelector],
  state => state.uid
);

export const getUserName = createSelector(
  [usersSelector],
  state => state.name
);
