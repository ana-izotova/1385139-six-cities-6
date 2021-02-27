import {ActionType} from "./action";
import {SortType} from "../const";
import {StateTypes} from "./store-types";

const initialState: StateTypes = {
  currentCity: `Paris`,
  offers: [],
  isLogged: false,
  sort: SortType.POPULAR
};

interface actionType {
  type: string,
  payload?: string
}

export const reducer = (state = initialState, action: actionType): StateTypes => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.payload
      };

    case ActionType.LOGIN:
      return {
        ...state,
        isLogged: true
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        isLogged: false
      };

    default:
      return state;
  }
};
