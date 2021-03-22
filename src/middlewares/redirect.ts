import browserHistory from "../browser-history";
import {ActionType} from "../store/action-types";
import {Middleware} from "redux";
import {RootStateType} from "../store/root-reducer";

export const redirect: Middleware<RootStateType> = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};
