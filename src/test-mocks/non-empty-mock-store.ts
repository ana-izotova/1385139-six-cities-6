import {AuthorizationStatus, Cities, FetchStatus, NameSpace, SortType} from "../const";
import {UserInitialStateTypes} from "../store/user/user-types";
import {SingleOfferInitialStateTypes} from "../store/single-offer/single-offer-types";
import {currentOffer, offersNearby, comments, allOffers, favoriteOffers} from "./adapted-data-mock";
import {AllOffersInitialStateTypes} from "../store/all-offers/all-offers-types";
import {FavoritesInitialStateTypes} from "../store/favorites/favorites-types";

const userStoreAuthorized: UserInitialStateTypes = {
  authorizationStatus: AuthorizationStatus.AUTH,
  login: `jondoe@mail.com`,
  userAvatar: `avatar.jpg`,
  fetchStatus: FetchStatus.DONE
};

const userStoreUnauthorized: UserInitialStateTypes = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: ``,
  userAvatar: ``,
  fetchStatus: FetchStatus.DONE
};

const singleOfferStore: SingleOfferInitialStateTypes = {
  offer: currentOffer,
  offersNearby,
  comments,
  isOfferLoaded: true,
  fetchStatus: FetchStatus.DONE,
  error: null
};

const allOffersStore: AllOffersInitialStateTypes = {
  currentCity: Cities[0],
  allOffers,
  currentSort: SortType.POPULAR,
  isDataLoaded: true,
  fetchStatus: FetchStatus.DONE,
  favoritesHaveBeenChanged: true,
  error: null
};

const favoritesStore: FavoritesInitialStateTypes = {
  favoriteCards: favoriteOffers,
  areFavoriteCardsLoaded: true
};

export const nonEmptyMockStoreUnauthorized = {
  [NameSpace.ALL_OFFERS]: allOffersStore,
  [NameSpace.SINGLE_OFFER]: singleOfferStore,
  [NameSpace.USER]: userStoreUnauthorized,
  [NameSpace.FAVORITES]: favoritesStore
};

export const nonEmptyMockStoreAuthorized = {
  [NameSpace.ALL_OFFERS]: allOffersStore,
  [NameSpace.SINGLE_OFFER]: singleOfferStore,
  [NameSpace.USER]: userStoreAuthorized,
  [NameSpace.FAVORITES]: favoritesStore
};

