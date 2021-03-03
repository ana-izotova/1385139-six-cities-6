import {OfferCard} from "../../types";

export interface OffersListProps {
  cards: Array<OfferCard>;
  offerType: `favorites` | `cities` | `near-places`;
  mouseEventHandler: (card: OfferCard) => void
}
