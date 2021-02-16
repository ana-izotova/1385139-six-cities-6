import React from "react";
import {Link} from "react-router-dom";
import {ClassNames, PlaceCardProps} from "./place-card-types";
import {convertRatingToPercents, capitalize} from "../../utils";

const getClassNames = (type: string): ClassNames => {
  let articleClassNames = [`${type}__card`, `place-card`];
  const imageWrapperClassNames = [
    `${type}__image-wrapper`,
    `place-card__image-wrapper`,
  ];
  let cardInfoClassNames = [`${type}__card-info`, `place-card__info`];

  if (type === `cities`) {
    articleClassNames = [`cities__place-card`, `place-card`];
    cardInfoClassNames = [`place-card__info`];
  }

  return {articleClassNames, imageWrapperClassNames, cardInfoClassNames};
};

const PlaceCard: React.FC<PlaceCardProps> = ({card, offerType}) => {
  const {previewImage, isPremium, price, title, type, rating, id} = card;
  const ratingInPercents = convertRatingToPercents(rating);
  const {
    articleClassNames,
    imageWrapperClassNames,
    cardInfoClassNames,
  } = getClassNames(offerType);

  return (
    <article className={articleClassNames.join(` `)}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={imageWrapperClassNames.join(` `)}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={offerType === `favorites` ? `150` : `260`}
            height={offerType === `favorites` ? `110` : `200`}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={cardInfoClassNames.join(` `)}>
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
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
};

export default PlaceCard;
