import React, {FormEvent, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/root-reducer";
import {FetchStatus, Comment} from "../../const";
import {sendComment} from "../../store/api-actions";
import NewCommentRatingInput from "../new-comment-rating-inputs/new-comment-rating-input";
import "./new-comment-form.css";

interface NewCommentFormProps {
  offerId: number
}

const NewCommentForm: React.FC<NewCommentFormProps> = ({offerId}) => {
  const [commentText, setCommentText] = useState(``);
  const [rating, setRating] = useState(null);

  const {fetchStatus: sendCommentFetchStatus} = useSelector((state: RootStateType) => state.SINGLE_OFFER);
  const dispatch = useDispatch();

  useEffect(() => {
    if (sendCommentFetchStatus === FetchStatus.DONE) {
      setCommentText(``);
      setRating(null);
    }
  }, [sendCommentFetchStatus]);

  const handleNewCommentSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    dispatch(sendComment(offerId, {comment: commentText, rating}));
  };

  const onRatingChange = useCallback(
      (evt) => {
        const value = Number(evt.target.value);
        setRating(value);
      }, []);

  return (
    <form
      className="reviews__form form"
      onSubmit={handleNewCommentSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <NewCommentRatingInput
        rating={rating}
        handleRatingChange={onRatingChange}
        fetchStatus={sendCommentFetchStatus}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}) => setCommentText(target.value)}
        value={commentText}
        data-testid="review"
        disabled={sendCommentFetchStatus === FetchStatus.PENDING}
      ></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">
            {Comment.MIN_LENGTH} characters
          </b>
          .
        </p>
        <button
          className={`reviews__submit form__submit button ${sendCommentFetchStatus === FetchStatus.ERROR ? `error-shake` : ``}`}
          type="submit"
          disabled={
            commentText.length < Comment.MIN_LENGTH ||
            commentText.length > Comment.MAX_LENGTH ||
            rating === null ||
            sendCommentFetchStatus === FetchStatus.PENDING
          }
        >
          Submit
        </button>
      </div>
      {sendCommentFetchStatus === FetchStatus.ERROR ? <span style={{color: `red`}}>An unexpected error has occurred. Please try again.</span> : ``}
    </form>
  );
};

export default NewCommentForm;
