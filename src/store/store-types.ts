import {OfferCard} from "../types";

export interface StateTypes {
  currentCity: string,
  offers: Array<OfferCard> | [],
  isLogged: boolean,
  sort: string
}
