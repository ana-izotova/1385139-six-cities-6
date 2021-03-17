import {OfferCard, Comment, CommentToPost} from "../../types";

export interface SingleOfferInitialStateTypes {
  offer: OfferCard,
  isOfferLoaded: boolean,
  offersNearby: Array<OfferCard>,
  comments: Array<Comment>,
  commentToPost: CommentToPost
}
