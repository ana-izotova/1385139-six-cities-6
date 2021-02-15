import React from "react";
import {Comment} from "../../types";
import {convertRatingToPercents, formatDate} from "../../utils";

const CommentItem: React.FC<Comment> = (comment) => {
  const {comment: commentText, date, rating, user} = comment;
  const {avatarUrl: userAvatarUrl, name: userName} = user;
  const ratingInPercents = convertRatingToPercents(rating);
  const formattedDate = formatDate(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={userAvatarUrl}
            width="54"
            height="54"
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingInPercents}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{commentText}</p>
        <time className="reviews__time" dateTime="2019-04-24">
          {formattedDate}
        </time>
      </div>
    </li>
  );
};

export default CommentItem;
