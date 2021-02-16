import {OfferCard} from "../../types";

export interface PlaceCardProps {
  offerType: `favorites` | `cities` | `near-places`;
  card: OfferCard;
}

export interface ClassNames {
  articleClassNames: Array<string>;
  imageWrapperClassNames: Array<string>;
  cardInfoClassNames: Array<string>;
}
