import {ChangeEvent} from "react";

export interface NewCommentRatingFormProps {
  rating: number,
  handleRatingChange: (evt: ChangeEvent) => void
}
