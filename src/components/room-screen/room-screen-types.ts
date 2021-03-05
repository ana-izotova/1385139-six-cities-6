import {Comment, OfferCard} from "../../types";

export interface RoomScreenProps {
  cards: Array<OfferCard>;
  id: string;
  currentOffersNearby: Array<OfferCard>;
  isDataLoaded: boolean;
  getOffersNearby: (id: number) => void;
  currentOfferComments: Array<Comment>;
  getComments: (id: number) => void;
  loggedIn: boolean
}
