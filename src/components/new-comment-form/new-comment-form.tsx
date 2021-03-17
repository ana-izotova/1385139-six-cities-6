import React, {ChangeEvent, FormEvent, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/root-reducer";
import {FetchStatus, COMMENT_MIN_LENGTH} from "../../const";
import {sendComment} from "../../store/api-actions";
import NewCommentRatingForm from "../new-comment-rating-form/new-comment-rating-form";

interface NewCommentFormProps {
  offerId: number
}

const NewCommentForm: React.FC<NewCommentFormProps> = ({offerId}) => {
  const [commentText, setCommentText] = useState(``);
  const [rating, setRating] = useState(null);

  const {fetchStatus} = useSelector((state: RootStateType) => state.ALL_OFFERS);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus === FetchStatus.DONE) {
      setCommentText(``);
      setRating(null);
    }
  }, [fetchStatus]);

  const handleNewCommentSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(sendComment(offerId, {comment: commentText, rating}));
  };

  const handleRatingChange = useCallback(
      (evt) => {
        const value = Number(evt.target.value);
        setRating(value);
      }, []);

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleNewCommentSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <NewCommentRatingForm
        rating={rating}
        handleRatingChange={handleRatingChange}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}) => setCommentText(target.value)}
        value={commentText}
        disabled={fetchStatus === FetchStatus.SENDING}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">
            {COMMENT_MIN_LENGTH} characters
          </b>
          .
        </p>
        <button
          className={`reviews__submit form__submit button ${fetchStatus === FetchStatus.ERROR ? `error-shake` : ``}`}
          type="submit"
          disabled={
            commentText.length < COMMENT_MIN_LENGTH ||
            rating === null ||
            fetchStatus === FetchStatus.SENDING
          }
        >
          Submit
        </button>
      </div>
      {fetchStatus === FetchStatus.ERROR ? <span style={{color: `red`}}>An unexpected error has occurred. Please try again.</span> : ``}
    </form>
  );
};

export default NewCommentForm;
