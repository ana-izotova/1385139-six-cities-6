import {City, OfferCard} from "../../types";

export interface AllOffersInitialStateTypes {
  currentCity: City,
  allOffers: Array<OfferCard>,
  currentSort: string,
  isDataLoaded: boolean,
  fetchStatus: string,
  favoritesHaveBeenChanged: boolean,
  error: number
}
