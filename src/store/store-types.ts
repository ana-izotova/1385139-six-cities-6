import {OfferCard, Comment, City} from "../types";

export interface StateTypes {
  currentCity: City,
  offers: Array<OfferCard>,
  loggedIn: boolean,
  currentSort: string,
  authorizationStatus: string,
  isDataLoaded: boolean,
  currentOfferComments: Array<Comment>,
  currentOffersNearby: Array<OfferCard>,
  activeCard: OfferCard
}
