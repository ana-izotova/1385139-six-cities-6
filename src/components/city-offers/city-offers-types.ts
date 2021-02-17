import {OfferCard} from "../../types";

export interface CityOffersProps {
  cards: Array<OfferCard>;
  city: string;
}

export interface NoCityOffersProps {
  city: string;
}
