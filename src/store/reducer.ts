import {SortType, AuthorizationStatus} from "../const";
import {StateTypes} from "./store-types";
import {ActionTypes, ActionType} from "./action-types";
import {Cities} from "../const";

const initialState: StateTypes = {
  currentCity: Cities[0],
  offers: [],
  login: ``,
  userAvatar: ``,
  currentSort: SortType.POPULAR,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  currentOfferComments: [],
  currentOffersNearby: [],
  activeCard: null,
  isCurrentOfferDataLoaded: false,
  currentOfferData: null
};

export const reducer = (state = initialState, action: ActionTypes): StateTypes => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        currentCity: action.city,
        currentSort: SortType.POPULAR,
      };

    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.offers,
        isDataLoaded: true,
      };

    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.authorizationStatus,
      };

    case ActionType.SET_USER_DATA:
      return {
        ...state,
        login: action.login,
        userAvatar: action.userAvatar,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: action.authorizationStatus,
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        currentOfferComments: action.comments,
      };

    case ActionType.LOAD_OFFERS_NEARBY:
      return {
        ...state,
        currentOffersNearby: action.offers,
      };

    case ActionType.LOAD_SINGLE_OFFER:
      return {
        ...state,
        currentOfferData: action.offer,
        isCurrentOfferDataLoaded: true
      };

    case ActionType.CHANGE_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.activeCard,
      };

    case ActionType.CHANGE_SORT:
      return {
        ...state,
        currentSort: action.currentSort,
      };

    default:
      return state;
  }
};
