import {City, OfferCard} from "../../types";

export interface CityOffersProps {
  cards: Array<OfferCard>;
  city: City;
}

export interface NoCityOffersProps {
  city: City;
}
