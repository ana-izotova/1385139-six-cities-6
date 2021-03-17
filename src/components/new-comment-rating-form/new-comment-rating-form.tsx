import React from "react";
import {NewCommentRatingFormProps} from "./new-comment-rating-form-types";
import {RatingTitles} from "../../const";

const NewCommentRatingForm: React.FC<NewCommentRatingFormProps> = ({handleRatingChange, rating}) => {
  return (
    <div className="reviews__rating-form form__rating">
      {RatingTitles.map((ratingTitle, i) => {
        const starRating = RatingTitles.length - i;
        return (
          <React.Fragment key={`${ratingTitle}-${i}-rating-score`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={starRating}
              id={`${starRating}-stars`}
              type="radio"
              checked={rating === starRating}
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${starRating}-stars`}
              className="reviews__rating-label form__rating-label"
              title={ratingTitle}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default React.memo(NewCommentRatingForm);
