import React, {useEffect, useLayoutEffect} from "react";
import {convertRatingToPercents, capitalize} from "../../utils/common";
import CommentItem from "../comment-item/comment-item";
import NewCommentForm from "../new-comment-form/new-comment-form";
import PlaceCard from "../place-card/place-card";
import Map from "../map/map";
import {StateTypes} from "../../store/store-types";
import {connect} from "react-redux";
import Header from "../header/header";
import LoaderScreensaver from "../loader-screensaver/loader-screensaver";
import {fetchOffersNearby, fetchOfferComments, fetchSingleOffersData} from "../../store/api-actions";
import {RoomScreenProps} from "./room-screen-types";
import {AuthorizationStatus, IMAGES_PER_PAGE} from "../../const";
import {ActionTypes} from "../../store/action-types";
import {ThunkDispatch} from "redux-thunk";
import {AxiosInstance} from "axios";
import NotFoundScreen from "../not-found-screen/not-found-screen";

const RoomScreen: React.FC<RoomScreenProps> = ({
  cards,
  id,
  currentOffersNearby,
  isDataLoaded,
  getOffersNearby,
  currentOfferComments,
  getComments,
  authorizationStatus
}) => {
  useLayoutEffect(() => {
    if (!isDataLoaded) {
      return;
    }
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: `smooth`,
      });
    } catch (error) {
      window.scrollTo(0, 0);
    }
  }, [id, isDataLoaded]);

  useEffect(() => {
    if (!isDataLoaded) {
      return;
    }
    getOffersNearby(Number(id));
    getComments(Number(id));
  }, [id, getComments, getOffersNearby, isDataLoaded]);

  if (!isDataLoaded) {
    return <LoaderScreensaver />;
  }

  const card = cards.find((item) => item.id === Number(id));

  if (!card) {
    return <NotFoundScreen />;
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
  } = card;
  const {name: hostName, isPro: hostIsPro, avatarUrl: hostAvatar} = host;
  const ratingInPercents: string = convertRatingToPercents(rating);
  const loggedIn: boolean = authorizationStatus === AuthorizationStatus.AUTH;

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
                  className="property__bookmark-button button"
                  type="button"
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
                  Reviews &middot;{` `}
                  <span className="reviews__amount">
                    {currentOfferComments.length}
                  </span>
                </h2>
                <ul className="reviews__list">
                  {currentOfferComments.map((comment) => (
                    <CommentItem {...comment} key={comment.id} />
                  ))}
                </ul>
                {loggedIn && <NewCommentForm />}
              </section>
            </div>
          </div>
          <Map cards={currentOffersNearby} offerCity={city} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              {currentOffersNearby.map((offer) => (
                <PlaceCard
                  offerType="near-places"
                  card={offer}
                  key={offer.id}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = ({
  currentOffersNearby,
  isCurrentOffersDataLoaded,
  currentOfferComments,
  authorizationStatus
}: StateTypes) => ({
  currentOffersNearby,
  isCurrentOffersDataLoaded,
  currentOfferComments,
  authorizationStatus
});

const mapDispatchToProps = (dispatch: ThunkDispatch<StateTypes, AxiosInstance, ActionTypes>) => ({
  getOffersData(cardId: number) {
    dispatch(fetchSingleOffersData(cardId));
  },
  getOffersNearby(cardId: number) {
    dispatch(fetchOffersNearby(cardId));
  },
  getComments(cardId: number) {
    dispatch(fetchOfferComments(cardId));
  },
});

export {RoomScreen};
export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
