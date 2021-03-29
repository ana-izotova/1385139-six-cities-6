import {AuthorizationStatus, Cities, FetchStatus, SortType, NameSpace} from "../const";
import {UserInitialStateTypes} from "../store/user/user-types";
import {AllOffersInitialStateTypes} from "../store/all-offers/all-offers-types";
import {SingleOfferInitialStateTypes} from "../store/single-offer/single-offer-types";
import {FavoritesInitialStateTypes} from "../store/favorites/favorites-types";

const userEmptyStateUnauthorized: UserInitialStateTypes = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: ``,
  userAvatar: ``,
  fetchStatus: FetchStatus.INIT
};

const userStateAuthorized: UserInitialStateTypes = {
  authorizationStatus: AuthorizationStatus.AUTH,
  login: `jondoe@mail.com`,
  userAvatar: `avatar.jpg`,
  fetchStatus: FetchStatus.DONE
};

const allOffersEmptyStateLoaded: AllOffersInitialStateTypes = {
  currentCity: Cities[0],
  allOffers: [],
  currentSort: SortType.POPULAR,
  isDataLoaded: true,
  fetchStatus: FetchStatus.INIT,
  favoritesHaveBeenChanged: false,
  error: null
};

const allOffersEmptyState: AllOffersInitialStateTypes = {
  currentCity: Cities[0],
  allOffers: [],
  currentSort: SortType.POPULAR,
  isDataLoaded: false,
  fetchStatus: FetchStatus.INIT,
  favoritesHaveBeenChanged: false,
  error: null
};

const singleOfferEmptyState: SingleOfferInitialStateTypes = {
  offer: null,
  offersNearby: [],
  comments: [],
  isOfferLoaded: true,
  fetchStatus: FetchStatus.INIT,
  error: null
};

const favoritesEmptyState: FavoritesInitialStateTypes = {
  favoriteCards: [],
  areFavoriteCardsLoaded: false
};

const favoritesEmptyStateLoaded: FavoritesInitialStateTypes = {
  favoriteCards: [],
  areFavoriteCardsLoaded: true
};

export const emptyMockStoreUnauthorized = {
  [NameSpace.ALL_OFFERS]: allOffersEmptyState,
  [NameSpace.SINGLE_OFFER]: singleOfferEmptyState,
  [NameSpace.USER]: userEmptyStateUnauthorized,
  [NameSpace.FAVORITES]: favoritesEmptyState
};

export const emptyMockStoreAuthorized = {
  [NameSpace.ALL_OFFERS]: allOffersEmptyStateLoaded,
  [NameSpace.SINGLE_OFFER]: singleOfferEmptyState,
  [NameSpace.USER]: userStateAuthorized,
  [NameSpace.FAVORITES]: favoritesEmptyStateLoaded
};
