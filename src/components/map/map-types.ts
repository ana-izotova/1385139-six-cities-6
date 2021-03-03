import {OfferCard, City} from "../../types";

export interface mapProps {
  currentCity: City;
  offerCity?: City;
  cards: Array<OfferCard>;
  style?: {
    height: string;
  };
  activeCard?: OfferCard;
}
