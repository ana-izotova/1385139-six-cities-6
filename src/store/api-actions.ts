import {AuthorizationStatus, ApiRoute, AppRoute, FetchStatus} from "../const";
import {CommentToPost} from "../types";
import {ActionType, ActionTypes} from "./action-types";
import type {ThunkAction} from "redux-thunk";
import type {Action} from "redux";
import type {AxiosInstance} from "axios";
import {
  loadAllOffers,
  redirectToRoute,
  requireAuthorization,
  setUserData,
  logout,
  loadComments,
  loadOffersNearby,
  loadSingleOffer, loadFavoriteCards, changeFavoriteStatus, changeFetchStatus,
} from "./action";

export type AppThunk<ReturnType = void> = ThunkAction<
  Promise<ReturnType>,
  any,
  AxiosInstance,
  Action<ActionType>
>;

export const fetchOffersData = (): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) => api.get(ApiRoute.HOTELS).then(({data}) => dispatch(loadAllOffers(data)));

export const checkAuth = (): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(ApiRoute.LOGIN)
    .then((response) => {
      dispatch(setUserData({login: response.data.email, userAvatar: response.data. avatar_url}));
      return response;
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)));

interface loginData {
  login: string;
  password: string;
}

export const login = ({
  login: email,
  password,
}: loginData): AppThunk<ActionTypes> => (dispatch, _getState, api) =>
  api
    .post(ApiRoute.LOGIN, {email, password})
    .then((response) => dispatch(setUserData({login: response.data.email, userAvatar: response.data.avatar_url})))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN_SCREEN)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)));

export const logoutFromSite = (): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(`/logout`)
    .then(() => dispatch(logout(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(setUserData({login: ``, userAvatar: ``})));

export const fetchOfferComments = (cardId: number): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(`${ApiRoute.COMMENTS}/${cardId}`)
    .then(({data}) => dispatch(loadComments(data)));

export const fetchOffersNearby = (offerId: number): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(`${ApiRoute.HOTELS}/${offerId}/nearby`)
    .then(({data}) => dispatch(loadOffersNearby(data)));

export const fetchSingleOffersData = (
    offerId: number
): AppThunk<ActionTypes> => (dispatch, _getState, api) =>
  api
    .get(`${ApiRoute.HOTELS}/${offerId}`)
    .then(({data}) => dispatch(loadSingleOffer(data)));

export const fetchFavoriteCards = (): AppThunk<ActionTypes> => (dispatch, _getState, api) =>
  api.get(`${ApiRoute.FAVORITES}`)
    .then(({data}) => dispatch(loadFavoriteCards(data)));

export const changeCardFavoriteStatus = (offerId: number, status: string): AppThunk<ActionTypes> => (dispatch, _getState, api) =>
  api.post(`${ApiRoute.FAVORITES}/${offerId}/${status}`)
    .then(({data}) => dispatch(changeFavoriteStatus(data)))
    .then(() => dispatch(changeFetchStatus(FetchStatus.DONE)))
    .catch(() => dispatch(changeFetchStatus(FetchStatus.ERROR)));

export const changeFavoriteOfferScreenStatus = (offerId: number, status: string): AppThunk<ActionTypes> => (dispatch, _state, api) => (
  api.post(`${ApiRoute.FAVORITES}/${offerId}/${status}`)
    .then(({data}) => {
      dispatch(changeFavoriteStatus(data));
      dispatch(loadSingleOffer(data));
    })
    .then(() => dispatch(changeFetchStatus(FetchStatus.DONE)))
    .catch(() => dispatch(changeFetchStatus(FetchStatus.ERROR))));

export const sendComment = (offerId: number, commentData: CommentToPost): AppThunk<ActionTypes> => (dispatch, _getState, api) =>
  api.post(`${ApiRoute.COMMENTS}/${offerId}`, commentData)
    .then(({data}) => dispatch(loadComments(data)))
    .then(() => dispatch(changeFetchStatus(FetchStatus.DONE)))
    .catch(() => dispatch(changeFetchStatus(FetchStatus.ERROR)))
    .finally(() => setTimeout(() => (dispatch(changeFetchStatus(FetchStatus.PENDING))), 3000));
