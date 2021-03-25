import {AuthorizationStatus, Cities, FetchStatus, SortType, NameSpace} from "../const";
import {UserInitialStateTypes} from "../store/user/user-types";
import {AllOffersInitialStateTypes} from "../store/all-offers/all-offers-types";
import {SingleOfferInitialStateTypes} from "../store/single-offer/single-offer-types";
import {FavoritesInitialStateTypes} from "../store/favorites/favorites-types";

const userEmptyState: UserInitialStateTypes = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: ``,
  userAvatar: ``,
  fetchStatus: FetchStatus.INIT
};

const allOffersEmptyState: AllOffersInitialStateTypes = {
  currentCity: Cities[0],
  allOffers: [],
  currentSort: SortType.POPULAR,
  isDataLoaded: false,
  fetchStatus: FetchStatus.INIT,
  favoritesHaveBeenChanged: false
};

const singleOfferEmptyState: SingleOfferInitialStateTypes = {
  offer: null,
  offersNearby: [],
  comments: [],
  isOfferLoaded: false,
  fetchStatus: FetchStatus.INIT
};

const favoritesEmptyState: FavoritesInitialStateTypes = {
  favoriteCards: [],
  areFavoriteCardsLoaded: false
};

export const emptyMockStore = {
  [NameSpace.ALL_OFFERS]: allOffersEmptyState,
  [NameSpace.SINGLE_OFFER]: singleOfferEmptyState,
  [NameSpace.USER]: userEmptyState,
  [NameSpace.FAVORITES]: favoritesEmptyState
};
