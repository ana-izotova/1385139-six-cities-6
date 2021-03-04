import {OfferCard, Comment, City} from "../types";
import {adaptToClient, adaptCommentToClient} from "../utils/adapters";
import {ActionType, ActionTypes} from "./action-types";

export const ActionCreator = {
  changeCity: (city: City): ActionTypes => ({
    type: ActionType.CHANGE_CITY,
    city
  }),
  loadOffers: (offers: Array<OfferCard>): ActionTypes => ({
    type: ActionType.LOAD_OFFERS,
    offers: offers.map((offer) => adaptToClient(offer))
  }),
  requireAuthorization: (authorizationStatus: string): ActionTypes => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    authorizationStatus
  }),
  loadComments: (comments: Array<Comment>): ActionTypes => ({
    type: ActionType.LOAD_COMMENTS,
    comments: comments.map((comment) => adaptCommentToClient(comment))
  }),
  loadOffersNearby: (offers: Array<OfferCard>): ActionTypes => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    offers: offers.map((offer) => adaptToClient(offer))
  }),
  changeActiveCard: (activeCard: OfferCard): ActionTypes => ({
    type: ActionType.CHANGE_ACTIVE_CARD,
    activeCard
  }),
  changeCurrentSort: (currentSort: string): ActionTypes => ({
    type: ActionType.CHANGE_SORT,
    currentSort
  })
};
