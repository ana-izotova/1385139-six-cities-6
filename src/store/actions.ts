import {createAction} from '@reduxjs/toolkit';
import {City, Comment, OfferCard, UserData} from "../types";
import {adaptCommentToClient, adaptToClient} from "../utils/adapters";
import {ActionType} from "./action-types";

export const changeCity = createAction(ActionType.CHANGE_CITY, (city: City) => {
  return {
    payload: city
  };
});

export const loadAllOffers = createAction(ActionType.LOAD_ALL_OFFERS, (offers: Array<OfferCard>) => {
  return {
    payload: offers.map((offer) => adaptToClient(offer))
  };
});

export const loadSingleOffer = createAction(ActionType.LOAD_SINGLE_OFFER, (offer: OfferCard) => {
  return {
    payload: adaptToClient(offer)
  };
});

export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION, (authorizationStatus: string) => {
  return {
    payload: authorizationStatus
  };
});

export const setUserData = createAction(ActionType.SET_USER_DATA, (userData: UserData) => {
  return {
    payload: userData
  };
});

export const logout = createAction(ActionType.LOGOUT, (authorizationStatus: string) => {
  return {
    payload: authorizationStatus
  };
});

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments: Array<Comment>) => {
  return {
    payload: comments.map((comment) => adaptCommentToClient(comment))
  };
});

export const loadOffersNearby = createAction(ActionType.LOAD_OFFERS_NEARBY, (offers: Array<OfferCard>) => {
  return {
    payload: offers.map((offer) => adaptToClient(offer))
  };
});

export const clearSingleOffersData = createAction(ActionType.CLEAR_SINGLE_OFFER_DATA, () => {
  return {
    payload: {offer: null, offersNearby: [], comments: [], isOfferLoaded: false}
  };
});

export const changeCurrentSort = createAction(ActionType.CHANGE_SORT, (currentSort: string) => {
  return {
    payload: currentSort
  };
});

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url: string) => {
  return {
    payload: url
  };
});

export const loadFavoriteCards = createAction(ActionType.LOAD_FAVORITES, (offers: Array<OfferCard>) => {
  return {
    payload: offers.map((offer) => adaptToClient(offer))
  };
});

export const changeFavoriteStatus = createAction(ActionType.CHANGE_FAVORITE_STATUS, (changedOfferCard: OfferCard) => {
  return {
    payload: adaptToClient(changedOfferCard)
  };
});

export const changeFetchStatus = createAction(ActionType.CHANGE_FETCH_STATUS, (status: string) => {
  return {
    payload: status
  };
});
