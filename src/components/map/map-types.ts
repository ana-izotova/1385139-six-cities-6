import {OfferCard, City} from "../../types";

export interface mapProps {
  offerCity?: City;
  cards: Array<OfferCard>;
  style?: {
    height: string;
  };
  isMainMap?: boolean,
  activeCardId?: number
}
