import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../const";
import {ActionType, ActionTypes} from "./action-types";
import type {ThunkAction} from "redux-thunk";
import type {Action} from "redux";
import type {AxiosInstance} from "axios";
import {StateTypes} from "./store-types";

export type AppThunk<ReturnType = void> = ThunkAction<
  Promise<ReturnType>,
  StateTypes,
  AxiosInstance,
  Action<ActionType>
>;

export const fetchOffersData = (): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)));

export const checkAuth = (): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(`/login`)
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
    );

export const login = (
    email: string,
    password: string
): AppThunk<ActionTypes> => (dispatch, _getState, api) =>
  api
    .post(`/login`, {email, password})
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
    );

export const fetchOfferComments = (cardId: number): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(`/comments/${cardId}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)));

export const fetchOffersNearby = (cardId: number): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(`/hotels/${cardId}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadOffersNearby(data)));
