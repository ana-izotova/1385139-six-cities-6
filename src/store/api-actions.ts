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
  loadSingleOffer,
  loadFavoriteCards,
  changeFavoriteStatus,
  changeFetchStatus, changeErrorStatus,
} from "./actions";
import {NameSpace} from "../const";

export type AppThunk<ReturnType = void> = ThunkAction<
  Promise<ReturnType>,
  any,
  AxiosInstance,
  Action<ActionType>
>;

// All offers

export const fetchOffersData = (): AppThunk => (
    dispatch,
    _getState,
    api
) => api
  .get(ApiRoute.HOTELS)
  .then(({data}) => {
    dispatch(changeErrorStatus(null, NameSpace.ALL_OFFERS));
    dispatch(changeFetchStatus(FetchStatus.PENDING, NameSpace.ALL_OFFERS));
    dispatch(loadAllOffers(data));
    dispatch(changeFetchStatus(FetchStatus.DONE, NameSpace.ALL_OFFERS));
  })
  .catch(({response}) => {
    dispatch(changeErrorStatus(response.status, NameSpace.ALL_OFFERS));
    dispatch(changeFetchStatus(FetchStatus.ERROR, NameSpace.ALL_OFFERS));
  });

export const changeCardFavoriteStatus = (
    offerId: number,
    status: string
): AppThunk<ActionTypes> => (dispatch, _getState, api) =>
  api
    .post(`${ApiRoute.FAVORITES}/${offerId}/${status}`)
    .then(({data}) => dispatch(changeFavoriteStatus(data)))
    .then(() =>
      dispatch(changeFetchStatus(FetchStatus.DONE, NameSpace.ALL_OFFERS))
    )
    .catch(() =>
      dispatch(changeFetchStatus(FetchStatus.ERROR, NameSpace.ALL_OFFERS))
    );

// User

export const checkAuth = (): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(ApiRoute.LOGIN)
    .then((response) => {
      dispatch(
          setUserData({
            login: response.data.email,
            userAvatar: response.data.avatar_url,
          })
      );
      return response;
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)));

interface loginData {
  login: string;
  password: string;
}

export const login = ({login: email, password}: loginData): AppThunk => (
    dispatch,
    _getState,
    api
) => {
  dispatch(changeFetchStatus(FetchStatus.PENDING, NameSpace.USER));
  return api
    .post(ApiRoute.LOGIN, {email, password})
    .then((response) =>
      dispatch(
          setUserData({
            login: response.data.email,
            userAvatar: response.data.avatar_url,
          })
      )
    )
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(changeFetchStatus(FetchStatus.DONE, NameSpace.USER));
      dispatch(redirectToRoute(AppRoute.MAIN_SCREEN));
    })
    .catch(() => {
      dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
      dispatch(changeFetchStatus(FetchStatus.ERROR, NameSpace.USER));
    });
};

export const logoutFromSite = (): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(`/logout`)
    .then(() => dispatch(logout(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(setUserData({login: ``, userAvatar: ``})));

// Favorites

export const fetchFavoriteCards = (): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(`${ApiRoute.FAVORITES}`)
    .then(({data}) => dispatch(loadFavoriteCards(data)));

// Single offer api-actions

export const fetchSingleOffersData = (
    offerId: number
): AppThunk => (dispatch, _getState, api) =>
  api
    .get(`${ApiRoute.HOTELS}/${offerId}`)
    .then(({data}) => {
      dispatch(changeFetchStatus(FetchStatus.PENDING, NameSpace.SINGLE_OFFER));
      dispatch(loadSingleOffer(data));
      dispatch(changeFetchStatus(FetchStatus.DONE, NameSpace.SINGLE_OFFER));
    })
    .catch(({response}) => {
      dispatch(changeFetchStatus(FetchStatus.ERROR, NameSpace.SINGLE_OFFER));
      dispatch(changeErrorStatus(response.status, NameSpace.SINGLE_OFFER));
    });

export const fetchOffersNearby = (offerId: number): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(`${ApiRoute.HOTELS}/${offerId}/nearby`)
    .then(({data}) => dispatch(loadOffersNearby(data)));

export const fetchOfferComments = (cardId: number): AppThunk<ActionTypes> => (
    dispatch,
    _getState,
    api
) =>
  api
    .get(`${ApiRoute.COMMENTS}/${cardId}`)
    .then(({data}) => dispatch(loadComments(data)));

export const changeFavoriteOfferScreenStatus = (
    offerId: number,
    status: string
): AppThunk<ActionTypes> => (dispatch, _state, api) =>
  api
    .post(`${ApiRoute.FAVORITES}/${offerId}/${status}`)
    .then(({data}) => {
      dispatch(changeFavoriteStatus(data));
      dispatch(loadSingleOffer(data));
    })
    .then(() =>
      dispatch(changeFetchStatus(FetchStatus.DONE, NameSpace.ALL_OFFERS))
    )
    .catch(() =>
      dispatch(changeFetchStatus(FetchStatus.ERROR, NameSpace.ALL_OFFERS))
    );

export const sendComment = (
    offerId: number,
    commentData: CommentToPost
): AppThunk<ActionTypes> => (dispatch, _getState, api) => {
  dispatch(changeFetchStatus(FetchStatus.PENDING, NameSpace.SINGLE_OFFER));
  return api
    .post(`${ApiRoute.COMMENTS}/${offerId}`, commentData)
    .then(({data}) => dispatch(loadComments(data)))
    .then(() =>
      dispatch(changeFetchStatus(FetchStatus.DONE, NameSpace.SINGLE_OFFER))
    )
    .catch(() =>
      dispatch(changeFetchStatus(FetchStatus.ERROR, NameSpace.SINGLE_OFFER))
    );
};
