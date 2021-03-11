import {OfferCard, Comment, City} from "../types";

export enum ActionType {
  CHANGE_CITY = `screen/changeCity`,
  LOAD_OFFERS = `data/loadOffers`,
  LOAD_SINGLE_OFFER = `data/loadSingleOffer`,
  REQUIRE_AUTHORIZATION = `user/requiredAuthorization`,
  SET_USER_DATA = `user/setUserData`,
  LOGOUT = `user/logout`,
  LOAD_COMMENTS = `data/loadComments`,
  LOAD_OFFERS_NEARBY = `data/LoadOffersNearby`,
  CHANGE_ACTIVE_CARD = `screen/changeActiveCard`,
  CHANGE_SORT = `screen/changeSort`,
  REDIRECT_TO_ROUTE = `screen/redirect`
}

interface ChangeCityAction {
  type: ActionType.CHANGE_CITY,
  city: City;
}

interface LoadOffersAction {
  type: ActionType.LOAD_OFFERS,
  offers: Array<OfferCard>
}

interface LoadSingleOfferAction {
  type: ActionType.LOAD_SINGLE_OFFER,
  offer: OfferCard
}

interface CheckAuthorization {
  type: ActionType.REQUIRE_AUTHORIZATION,
  authorizationStatus: string
}

interface AuthorizationAction {
  type: ActionType.SET_USER_DATA,
  login: string,
  userAvatar: string
}

interface LogoutAction {
  type: ActionType.LOGOUT;
  authorizationStatus: string;
}

interface LoadCommentsAction {
  type: ActionType.LOAD_COMMENTS,
  comments: Array<Comment>
}

interface LoadOffersNearbyAction {
  type: ActionType.LOAD_OFFERS_NEARBY,
  offers: Array<OfferCard>
}

interface ChangeActiveCardAction {
  type: ActionType.CHANGE_ACTIVE_CARD,
  activeCard: OfferCard
}

interface ChangeCurrentSortAction {
  type: ActionType.CHANGE_SORT,
  currentSort: string
}

interface RedirectAction {
  type: ActionType.REDIRECT_TO_ROUTE,
  url: string
}

export type ActionTypes =
  | ChangeCityAction
  | LoadOffersAction
  | LoadSingleOfferAction
  | CheckAuthorization
  | AuthorizationAction
  | LogoutAction
  | LoadCommentsAction
  | LoadOffersNearbyAction
  | ChangeActiveCardAction
  | ChangeCurrentSortAction
  | RedirectAction;
