import {OfferCard, Comment, City, UserData} from "../types";

export enum ActionType {
  CHANGE_CITY = `screen/changeCity`,
  LOAD_ALL_OFFERS = `data/loadOffers`,
  LOAD_SINGLE_OFFER = `data/loadSingleOffer`,
  REQUIRE_AUTHORIZATION = `user/requiredAuthorization`,
  SET_USER_DATA = `user/setUserData`,
  LOGOUT = `user/logout`,
  LOAD_COMMENTS = `data/loadComments`,
  LOAD_OFFERS_NEARBY = `data/loadOffersNearby`,
  CHANGE_SORT = `screen/changeSort`,
  REDIRECT_TO_ROUTE = `screen/redirect`,
  CLEAR_SINGLE_OFFER_DATA = `data/clearSingleOfferData`,
  LOAD_FAVORITES = `data/loadFavorites`,
  CHANGE_FAVORITE_STATUS = `data/changeFavoriteStatus`,
  CHANGE_FETCH_STATUS = `data/changeFetchStatus`,
}

interface ChangeCityAction {
  type: ActionType.CHANGE_CITY;
  payload: City;
}

interface LoadAllOffersAction {
  type: ActionType.LOAD_ALL_OFFERS;
  payload: Array<OfferCard>;
}

interface LoadSingleOfferAction {
  type: ActionType.LOAD_SINGLE_OFFER;
  payload: OfferCard;
}

interface CheckAuthorization {
  type: ActionType.REQUIRE_AUTHORIZATION;
  payload: string;
}

interface AuthorizationAction {
  type: ActionType.SET_USER_DATA;
  payload: UserData;
}

interface LogoutAction {
  type: ActionType.LOGOUT;
  payload: string;
}

interface LoadCommentsAction {
  type: ActionType.LOAD_COMMENTS;
  payload: Array<Comment>;
}

interface LoadOffersNearbyAction {
  type: ActionType.LOAD_OFFERS_NEARBY;
  payload: Array<OfferCard>;
}

interface ChangeCurrentSortAction {
  type: ActionType.CHANGE_SORT;
  payload: string;
}

interface RedirectAction {
  type: ActionType.REDIRECT_TO_ROUTE;
  payload: string;
}

interface ClearSingleOfferDataAction {
  type: ActionType.CLEAR_SINGLE_OFFER_DATA;
  payload: {
    offer: OfferCard;
    offersNearby: Array<OfferCard>;
    comments: Array<Comment>;
    isOfferLoaded: boolean;
  };
}

interface LoadFavoriteOffersAction {
  type: ActionType.LOAD_FAVORITES;
  payload: Array<OfferCard>;
}

interface ChangeFavoriteStatusAction {
  type: ActionType.CHANGE_FAVORITE_STATUS;
  payload: OfferCard;
}

interface ChangeFetchStatusAction {
  type: ActionType.CHANGE_FETCH_STATUS;
  payload: { status: string; reducerName: string };
}

export type ActionTypes =
  | ChangeCityAction
  | LoadAllOffersAction
  | LoadSingleOfferAction
  | CheckAuthorization
  | AuthorizationAction
  | LogoutAction
  | LoadCommentsAction
  | LoadOffersNearbyAction
  | ChangeCurrentSortAction
  | RedirectAction
  | LoadFavoriteOffersAction
  | ChangeFavoriteStatusAction
  | ChangeFetchStatusAction
  | ClearSingleOfferDataAction;
