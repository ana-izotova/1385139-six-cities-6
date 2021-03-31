import React, {useEffect} from "react";
import PlaceCard from "../place-card/place-card";
import {OfferCard} from "../../types";
import Header from "../header/header";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/root-reducer";
import {fetchFavoriteCards} from "../../store/api-actions";
import LoaderScreensaver from "../loader-screensaver/loader-screensaver";
import Footer from "../footer/footer";
import FavoritesScreenEmpty from "../favorites-screen-empty/favorites-screen-empty";
import {FavoriteCardsProps} from "./favprites-screen-types";

const FavoriteCards: React.FC<FavoriteCardsProps> = ({favoriteCards}) => {
  const getFavoriteCardsSortedByCity = favoriteCards.reduce<Record<string, Array<OfferCard>>>((acc, card) => {
    const key = card.city.name;
    acc[key] = acc[key] ? [...(acc[key]), card] : [card];
    return acc;
  }, {});

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(getFavoriteCardsSortedByCity).map((entry) => {
          const [cityName, cards] = entry;
          return (
            <li className="favorites__locations-items" key={cityName}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{cityName}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {cards.map((card: OfferCard) => (
                  <PlaceCard card={card} offerType="favorites" key={card.id} />
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const FavoritesScreen: React.FC = () => {
  const {favoritesHaveBeenChanged} = useSelector((state: RootStateType) => state.ALL_OFFERS);
  const {favoriteCards, areFavoriteCardsLoaded} = useSelector((state: RootStateType) => state.FAVORITES);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteCards());
  }, [dispatch, favoritesHaveBeenChanged]);

  if (!areFavoriteCardsLoaded) {
    return <LoaderScreensaver />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favoriteCards.length ? (
            <FavoriteCards favoriteCards={favoriteCards} />
          ) : (
            <FavoritesScreenEmpty />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FavoritesScreen;
