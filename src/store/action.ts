import { City, Comment, OfferCard } from "../types";
import { adaptCommentToClient, adaptToClient } from "../utils/adapters";
import { ActionType, ActionTypes } from "./action-types";

export const ActionCreator = {
  changeCity: (city: City): ActionTypes => ({
    type: ActionType.CHANGE_CITY,
    city,
  }),
  loadOffers: (offers: Array<OfferCard>): ActionTypes => ({
    type: ActionType.LOAD_OFFERS,
    offers: offers.map((offer) => adaptToClient(offer)),
  }),
  loadSingleOffer: (offer: OfferCard): ActionTypes => ({
    type: ActionType.LOAD_SINGLE_OFFER,
    offer
  }),
  requireAuthorization: (authorizationStatus: string): ActionTypes => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    authorizationStatus,
  }),
  setUserData: (login: string, userAvatar: string): ActionTypes => ({
    type: ActionType.SET_USER_DATA,
    login,
    userAvatar,
  }),
  logout: (authorizationStatus: string): ActionTypes => ({
    type: ActionType.LOGOUT,
    authorizationStatus,
  }),
  loadComments: (comments: Array<Comment>): ActionTypes => ({
    type: ActionType.LOAD_COMMENTS,
    comments: comments.map((comment) => adaptCommentToClient(comment)),
  }),
  loadOffersNearby: (offers: Array<OfferCard>): ActionTypes => ({
    type: ActionType.LOAD_OFFERS_NEARBY,
    offers: offers.map((offer) => adaptToClient(offer)),
  }),
  changeActiveCard: (activeCard: OfferCard): ActionTypes => ({
    type: ActionType.CHANGE_ACTIVE_CARD,
    activeCard,
  }),
  changeCurrentSort: (currentSort: string): ActionTypes => ({
    type: ActionType.CHANGE_SORT,
    currentSort,
  }),
  redirectToRoute: (url: string): ActionTypes => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    url,
  }),
};
