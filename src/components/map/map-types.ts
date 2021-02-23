import {OfferCard, City} from "../../types";

export interface mapProps {
  city: City;
  cards: Array<OfferCard>;
  style: {
    height: string;
  };
}
