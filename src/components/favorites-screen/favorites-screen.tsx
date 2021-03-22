import React, {useEffect} from "react";
import PlaceCard from "../place-card/place-card";
import {OfferCard} from "../../types";
import Header from "../header/header";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/root-reducer";
import {fetchFavoriteCards} from "../../store/api-actions";
import LoaderScreensaver from "../loader-screensaver/loader-screensaver";
import Footer from "../footer/footer";

const EmptyFavorites: React.FC = () => {
  return (
    <section className="favorites favorites--empty">
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">
          Save properties to narrow down search or plan your future trips.
        </p>
      </div>
    </section>
  );
};

interface FavoriteCardsProps {
  favoriteCards: Array<OfferCard>
}

const FavoriteCards: React.FC<FavoriteCardsProps> = ({favoriteCards}) => {
  const favoriteCardsSortedByCity = favoriteCards.reduce<Record<string, Array<OfferCard>>>((acc, card) => {
    const key = card.city.name;
    acc[key] = acc[key] ? [...(acc[key]), card] : [card];
    return acc;
  }, {});

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {Object.entries(favoriteCardsSortedByCity).map((entry) => {
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
            <EmptyFavorites />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FavoritesScreen;
