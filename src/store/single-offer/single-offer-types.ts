import {OfferCard, Comment} from "../../types";

export interface SingleOfferInitialStateTypes {
  offer: OfferCard,
  isOfferLoaded: boolean,
  offersNearby: Array<OfferCard>,
  comments: Array<Comment>
  fetchStatus: string,
  error: number
}
