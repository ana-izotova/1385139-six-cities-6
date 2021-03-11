import {ActionCreator} from "./action";
import {AuthorizationStatus, ApiRoute, AppRoute} from "../const";
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
    .get(ApiRoute.HOTELS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)));

export const checkAuth = (): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(ApiRoute.LOGIN)
    .then((response) => {
      dispatch(
          ActionCreator.setUserData(response.data.email, response.data.avatarUrl)
      );
      return response;
    })
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH))
    )
    .catch(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
    );

interface loginData {
  login: string,
  password: string
}

export const login = ({login: email, password}: loginData): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .post(ApiRoute.LOGIN, {email, password})
    .then((response) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      return response;
    })
    .then((response) =>
      dispatch(
          ActionCreator.setUserData(response.data.email, response.data.avatarUrl)
      )
    )
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN_SCREEN)))
    .catch(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
    );

export const logout = (): AppThunk<ActionTypes> => (dispatch, _getState, api) =>
  api
    .get(`/logout`)
    .then(() => dispatch(ActionCreator.logout(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(ActionCreator.setUserData(``, ``)));

export const fetchOfferComments = (cardId: number): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(`${ApiRoute.COMMENTS}/${cardId}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)));

export const fetchOffersNearby = (offerId: number): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(`${ApiRoute.HOTELS}/${offerId}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadOffersNearby(data)));

export const fetchSingleOffersData = (offerId: number): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(`${ApiRoute.HOTELS}/${offerId}`)
    .then(({data}) => dispatch(ActionCreator.loadSingleOffer(data)));
