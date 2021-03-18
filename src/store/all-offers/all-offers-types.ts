import {City, OfferCard} from "../../types";

export interface allOffersInitialStateTypes {
  currentCity: City,
  allOffers: Array<OfferCard>,
  currentSort: string,
  isDataLoaded: boolean,
  favoriteCards: Array<OfferCard>,
  areFavoriteCardsLoaded: boolean,
  fetchStatus: string,
  favoritesHaveBeenChanged: boolean
}
