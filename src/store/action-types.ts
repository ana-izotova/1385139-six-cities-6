import {ActionType} from "./action";
import {OfferCard, Comment, City} from "../types";

interface ChangeCityAction {
  type: typeof ActionType.CHANGE_CITY,
  city: City
}

interface LoadOffersAction {
  type: typeof ActionType.LOAD_OFFERS,
  offers: Array<OfferCard>
}

interface AuthorizationAction {
  type: typeof ActionType.REQUIRED_AUTHORIZATION,
  authorizationStatus: string
}

interface LoadCommentsAction {
  type: typeof ActionType.LOAD_COMMENTS,
  comments: Array<Comment>
}

interface LoadOffersNearbyAction {
  type: typeof ActionType.LOAD_OFFERS_NEARBY,
  offers: Array<OfferCard>
}

interface ChangeActiveCardAction {
  type: typeof ActionType.CHANGE_ACTIVE_CARD,
  activeCard: OfferCard
}

interface ChangeCurrentSortAction {
  type: typeof ActionType.CHANGE_SORT,
  currentSort: string
}

export type ActionTypes = ChangeCityAction | LoadOffersAction | AuthorizationAction | LoadCommentsAction | LoadOffersNearbyAction | ChangeActiveCardAction | ChangeCurrentSortAction;
