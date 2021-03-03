import {OfferCard, City} from "../../types";

export interface CityOffersProps {
  cards: Array<OfferCard>;
  currentCity: City;
  currentSort: string;
}

export interface NoCityOffersProps {
  city: City;
}
