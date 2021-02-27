import {OfferCard} from "../../types";

export interface CityOffersProps {
  cards: Array<OfferCard>;
  currentCity: string;
}

export interface NoCityOffersProps {
  city: string;
}
