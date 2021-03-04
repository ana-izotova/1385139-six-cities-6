import {OfferCard, Comment, City} from "../types";

export enum ActionType {
  CHANGE_CITY,
  LOAD_OFFERS,
  REQUIRED_AUTHORIZATION,
  LOAD_COMMENTS,
  LOAD_OFFERS_NEARBY,
  CHANGE_ACTIVE_CARD,
  CHANGE_SORT
}

interface ChangeCityAction {
  type: ActionType.CHANGE_CITY,
  city: City
}

interface LoadOffersAction {
  type: ActionType.LOAD_OFFERS,
  offers: Array<OfferCard>
}

interface AuthorizationAction {
  type: ActionType.REQUIRED_AUTHORIZATION,
  authorizationStatus: string
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

export type ActionTypes = ChangeCityAction | LoadOffersAction | AuthorizationAction | LoadCommentsAction | LoadOffersNearbyAction | ChangeActiveCardAction | ChangeCurrentSortAction;
