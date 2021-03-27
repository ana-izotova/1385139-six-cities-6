import React, {useEffect, useLayoutEffect} from "react";
import {convertRatingToPercents, capitalize} from "../../utils/common";
import CommentItem from "../comment-item/comment-item";
import NewCommentForm from "../new-comment-form/new-comment-form";
import PlaceCard from "../place-card/place-card";
import Map from "../map/map";
import Header from "../header/header";
import LoaderScreensaver from "../loader-screensaver/loader-screensaver";
import {RoomScreenProps} from "./room-screen-types";
import {AuthorizationStatus, IMAGES_PER_PAGE, FetchStatus, FavoriteStatus, AppRoute, COMMENTS_PER_PAGE} from "../../const";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/root-reducer";
import {
  changeFavoriteOfferScreenStatus,
  fetchOfferComments,
  fetchOffersNearby,
  fetchSingleOffersData
} from "../../store/api-actions";
import {clearSingleOffersData} from "../../store/actions";
import browserHistory from "../../browser-history";
import ErrorScreen from "../error-screen/error-screen";

const RoomScreen: React.FC<RoomScreenProps> = ({cardId}) => {
  const {isOfferLoaded, offer, offersNearby, comments, error} = useSelector((state: RootStateType) => state.SINGLE_OFFER);
  const {authorizationStatus} = useSelector((state: RootStateType) => state.USER);
  const {favoritesHaveBeenChanged, allOffers, fetchStatus} = useSelector((state: RootStateType) => state.ALL_OFFERS);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleOffersData(cardId));
    dispatch(fetchOfferComments(cardId));

    return () => {
      dispatch(clearSingleOffersData());
    };
  }, [cardId, dispatch]);

  useEffect(() => {
    dispatch(fetchOffersNearby(cardId));
  }, [favoritesHaveBeenChanged, cardId, dispatch, allOffers]);

  useLayoutEffect(() => {
    if (!isOfferLoaded) {
      return;
    }
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: `smooth`,
      });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }, [cardId, isOfferLoaded]);

  if (error) {
    return <ErrorScreen errorCode={error} />;
  }

  if (!isOfferLoaded) {
    return <LoaderScreensaver />;
  }

  const {
    isPremium,
    price,
    title,
    type,
    rating,
    images,
    bedrooms,
    maxAdults,
    goods,
    host,
    description,
    city,
    isFavorite
  } = offer;
  const {name: hostName, isPro: hostIsPro, avatarUrl: hostAvatar} = host;
  const ratingInPercents: string = convertRatingToPercents(rating);
  const loggedIn: boolean = authorizationStatus === AuthorizationStatus.AUTH;

  const handleFavoriteClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      browserHistory.push(AppRoute.LOGIN_SCREEN);
    } else {
      const statusToChange = isFavorite
        ? FavoriteStatus.UNFAVORED
        : FavoriteStatus.FAVORITE;
      dispatch(changeFavoriteOfferScreenStatus(cardId, statusToChange));
    }
  };

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, IMAGES_PER_PAGE).map((image) => (
                <div
                  className="property__image-wrapper"
                  key={image.slice(52, -4)}
                >
                  <img
                    className="property__image"
                    src={image}
                    alt="Photo studio"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button
                  className={`property__bookmark-button ${isFavorite ? `property__bookmark-button--active` : ``} button ${fetchStatus === FetchStatus.ERROR ? `error-shake` : ``}`}
                  type="button"
                  onClick={handleFavoriteClick}
                  disabled={fetchStatus === FetchStatus.PENDING}
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: ratingInPercents}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalize(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} {bedrooms > 1 ? `Bedrooms` : `Bedroom`}
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} {maxAdults > 1 ? `adults` : `adult`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item, index) => (
                    <li className="property__inside-item" key={item + index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={hostAvatar}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{hostName}</span>
                  {hostIsPro && (
                    <span className="property__user-status">Pro</span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">
                  Reviews <span className="reviews__amount">{comments.length}</span>
                </h2>
                <ul className="reviews__list">
                  {comments.slice(0, COMMENTS_PER_PAGE).map((comment) => (
                    <CommentItem {...comment} key={comment.id} />
                  ))}
                </ul>
                {loggedIn && <NewCommentForm offerId={cardId}/>}
              </section>
            </div>
          </div>
          <Map cards={offersNearby} offerCity={city} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {offersNearby.map((offerNearby) => (
                <PlaceCard
                  offerType="near-places"
                  card={offerNearby}
                  key={offerNearby.id}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RoomScreen;
