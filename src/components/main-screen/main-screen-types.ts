import {OfferCard} from "../../types";

export interface mainScreenTypes {
  cards: Array<OfferCard> | [],
  onUserClick: (city: string) => void
}
