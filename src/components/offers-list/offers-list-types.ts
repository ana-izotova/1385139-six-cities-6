import {OfferCard} from "../../types";

export interface OfferListProps {
  cards: Array<OfferCard>;
  offerType: `favorites` | `cities` | `near-places`;
}
