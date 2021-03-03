import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";

export const fetchOffersData = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const fetchOfferComments = (cardId: number) => (dispatch, _getState, api) => (
  api.get(`/comments/${cardId}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const fetchOffersNearby = (cardId: number) => (dispatch, _getState, api) => (
  api.get(`/hotels/${cardId}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadOffersNearby(data)))
);
