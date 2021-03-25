import {createAction} from '@reduxjs/toolkit';
import {City, UserData} from "../types";
import {adaptCommentToClient, adaptToClient} from "../utils/adapters";
import {ActionType} from "./action-types";

// All offers

export const loadAllOffers = createAction(ActionType.LOAD_ALL_OFFERS, (offers: Array<any>) => {
  return {
    payload: offers.map((offer) => adaptToClient(offer))
  };
});

export const changeCity = createAction(ActionType.CHANGE_CITY, (city: City) => {
  return {
    payload: city
  };
});

// Favorites

export const loadFavoriteCards = createAction(ActionType.LOAD_FAVORITES, (offers: Array<any>) => {
  return {
    payload: offers.map((offer) => adaptToClient(offer))
  };
});

export const changeFavoriteStatus = createAction(ActionType.CHANGE_FAVORITE_STATUS, (changedOfferCard) => {
  return {
    payload: adaptToClient(changedOfferCard)
  };
});

// Single offer

export const loadSingleOffer = createAction(ActionType.LOAD_SINGLE_OFFER, (offer: any) => {
  return {
    payload: adaptToClient(offer)
  };
});

export const loadComments = createAction(ActionType.LOAD_COMMENTS, (comments: Array<any>) => {
  return {
    payload: comments.map((comment) => adaptCommentToClient(comment))
  };
});

export const loadOffersNearby = createAction(ActionType.LOAD_OFFERS_NEARBY, (offers: Array<any>) => {
  return {
    payload: offers.map((offer) => adaptToClient(offer))
  };
});

export const clearSingleOffersData = createAction(ActionType.CLEAR_SINGLE_OFFER_DATA);

export const changeCurrentSort = createAction(ActionType.CHANGE_SORT, (currentSort: string) => {
  return {
    payload: currentSort
  };
});

// User

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


export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url: string) => {
  return {
    payload: url
  };
});

export const changeFetchStatus = createAction(ActionType.CHANGE_FETCH_STATUS, (status: string, reducerName: string) => {
  return {
    payload: {status, reducerName}
  };
});
