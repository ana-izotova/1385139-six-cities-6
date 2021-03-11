import browserHistory from "../browser-history";
import {ActionType} from "../store/action-types";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.url);
  }

  return next(action);
};
