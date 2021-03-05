import {OfferCard} from "../../types";

export interface PlaceCardProps {
  offerType: `favorites` | `cities` | `near-places`;
  card: OfferCard;
  activeCardChangeStateHandler?: (card: OfferCard) => void,
}

export interface ClassNames {
  articleClassNames: string;
  imageWrapperClassNames: string;
  cardInfoClassNames: string;
}
