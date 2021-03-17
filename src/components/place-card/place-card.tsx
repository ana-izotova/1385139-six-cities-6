import React from "react";
import {Link} from "react-router-dom";
import {ClassNames, PlaceCardProps} from "./place-card-types";
import {capitalize, convertRatingToPercents} from "../../utils/common";
import {useDispatch, useSelector} from "react-redux";
import {changeFetchStatus} from "../../store/action";
import {AppRoute, AuthorizationStatus, FavoriteStatus, FetchStatus} from "../../const";
import {changeCardFavoriteStatus, fetchFavoriteCards, fetchOffersNearby} from "../../store/api-actions";
import {RootStateType} from "../../store/root-reducer";
import browserHistory from "../../browser-history";

const getClassNames = (type: string): ClassNames => {
  let articleClassNames = `${type}__card place-card`;
  const imageWrapperClassNames = `${type}__image-wrapper place-card__image-wrapper`;
  let cardInfoClassNames = `${type}__card-info place-card__info`;

  if (type === `cities`) {
    articleClassNames = `cities__place-card place-card`;
    cardInfoClassNames = `place-card__info`;
  }

  return {articleClassNames, imageWrapperClassNames, cardInfoClassNames};
};

const PlaceCard: React.FC<PlaceCardProps> = ({
  card,
  offerType,
  activeCardIdChangeStateHandler,
}) => {
  const {
    previewImage,
    isPremium,
    price,
    title,
    type,
    rating,
    id,
    isFavorite,
  } = card;
  const ratingInPercents = convertRatingToPercents(rating);
  const {
    articleClassNames,
    imageWrapperClassNames,
    cardInfoClassNames,
  } = getClassNames(offerType);

  const {fetchStatus} = useSelector(
      (state: RootStateType) => state.ALL_OFFERS
  );
  const {authorizationStatus} = useSelector((state: RootStateType) => state.USER);
  const dispatch = useDispatch();

  const handleMouseHover = () => {
    activeCardIdChangeStateHandler(id);
  };

  const handleMouseLeave = () => {
    activeCardIdChangeStateHandler(null);
  };

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      browserHistory.push(AppRoute.LOGIN_SCREEN);
    } else {
      const statusToChange = isFavorite
        ? FavoriteStatus.UNFAVORED
        : FavoriteStatus.FAVORITE;
      dispatch(changeCardFavoriteStatus(id, statusToChange));
      dispatch(changeFetchStatus(FetchStatus.SENDING));
    }
  };

  return (
    <article
      onMouseEnter={offerType === `cities` ? handleMouseHover : null}
      onMouseLeave={offerType === `cities` ? handleMouseLeave : null}
      className={articleClassNames}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={imageWrapperClassNames}>
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
      <div className={cardInfoClassNames}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${
              isFavorite && `place-card__bookmark-button--active`
            } button`}
            type="button"
            onClick={handleFavoriteClick}
            disabled={fetchStatus === FetchStatus.SENDING}
          >
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
