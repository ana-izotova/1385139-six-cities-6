import React from "react";
import {OfferCard} from "../../types";

export const PlaceCardInfo: React.FC<OfferCard> = ({
  price,
  title,
  type,
  rating,
}) => {
  const ratingInPercents = rating * 10 * 2 + `%`;

  return (
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className="place-card__bookmark-button button" type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: ratingInPercents}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{title}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  );
};

export default PlaceCardInfo;
