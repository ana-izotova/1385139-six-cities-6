import {OfferCard, Comment, City} from "../types";
import {ActionTypes} from "./action-types";
import {adaptToClient, adaptCommentToClient} from "../utils/adapters";

export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  LOAD_COMMENTS: `data/loadComments`,
  LOAD_OFFERS_NEARBY: `data/loadOffersNearby`,
  CHANGE_ACTIVE_CARD: `main/changeActiveCard`,
  CHANGE_SORT: `main/changeSort`
};

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
