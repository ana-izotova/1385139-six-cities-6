import {OfferCard} from "../../types";

export interface mapProps {
  currentCity: string;
  cards: Array<OfferCard>;
  style?: {
    height: string;
  };
}
