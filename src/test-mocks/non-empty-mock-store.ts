import {AuthorizationStatus, Cities, FetchStatus, NameSpace, SortType} from "../const";
import {UserInitialStateTypes} from "../store/user/user-types";
import {SingleOfferInitialStateTypes} from "../store/single-offer/single-offer-types";
import {currentOffer, offersNearby, comments, allOffers} from "./adapted-data-mock";
import {AllOffersInitialStateTypes} from "../store/all-offers/all-offers-types";
import {FavoritesInitialStateTypes} from "../store/favorites/favorites-types";

const userStore: UserInitialStateTypes = {
  authorizationStatus: AuthorizationStatus.AUTH,
  login: `jondoe@mail.com`,
  userAvatar: `avatar.jpg`,
  fetchStatus: FetchStatus.DONE
};

const singleOfferStore: SingleOfferInitialStateTypes = {
  offer: currentOffer,
  offersNearby,
  comments,
  isOfferLoaded: true,
  fetchStatus: FetchStatus.DONE
};

const allOffersStore: AllOffersInitialStateTypes = {
  currentCity: Cities[0],
  allOffers,
  currentSort: SortType.POPULAR,
  isDataLoaded: true,
  fetchStatus: FetchStatus.DONE,
  favoritesHaveBeenChanged: true
};

const favoritesStore: FavoritesInitialStateTypes = {
  favoriteCards: [],
  areFavoriteCardsLoaded: false
};

export const nonEmptyMockStore = {
  [NameSpace.ALL_OFFERS]: allOffersStore,
  [NameSpace.SINGLE_OFFER]: singleOfferStore,
  [NameSpace.USER]: userStore,
  [NameSpace.FAVORITES]: favoritesStore
};

