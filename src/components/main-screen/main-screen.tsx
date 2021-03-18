import React, {useState} from "react";
import CitiesList from "../cities-list/cities-list";
import Header from "../header/header";
import {RootStateType} from "../../store/root-reducer";
import LoaderScreensaver from "../loader-screensaver/loader-screensaver";
import {useSelector} from "react-redux";
import {createSelector} from "reselect";
import Sorting from "../sorting/sorting";
import Map from "../map/map";
import {sortCards} from "../../utils/sorting";
import {AllOffersReducerStateType} from "../../store/all-offers/all-offers";
import PlaceCard from "../place-card/place-card";
import NoCityOffers from "../no-city-offers/no-city-offers";

const cardsSelector = (state: AllOffersReducerStateType) => state.allOffers;
const currentCitySelector = (state: AllOffersReducerStateType) => state.currentCity;

const getFilteredCards = createSelector(
    cardsSelector,
    currentCitySelector,
    (offerCards, city) =>
      offerCards.filter((offerCard) => offerCard.city.name === city.name)
);

const MainScreen: React.FC = () => {
  const {currentSort, currentCity, isDataLoaded} = useSelector(
      (state: RootStateType) => state.ALL_OFFERS
  );
  const allOffersState = useSelector(
      (state: RootStateType) => state.ALL_OFFERS
  );
  const [activeCardId, setActiveCardId] = useState(null);

  const filteredCards = getFilteredCards(allOffersState);
  const sortedCards = sortCards(filteredCards, currentSort);
  const offersAmount = filteredCards.length;

  return (
    <div className="page page--gray page--main">
      <Header isMainScreen={true} />
      <main
        className={`page__main page__main--index ${
          offersAmount === 0 ? `page__main--index-empty` : ``
        }`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        {isDataLoaded ? (
          <div className="cities">
            {offersAmount ? (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">
                    {offersAmount} {offersAmount > 1 ? `places` : `place`} to
                    stay in {currentCity.name}
                  </b>
                  <Sorting />
                  <div className="cities__places-list places__list tabs__content">
                    {sortedCards.map((card) => (
                      <PlaceCard
                        card={card}
                        offerType={`cities`}
                        key={card[`id`]}
                        activeCardIdChangeStateHandler={setActiveCardId}
                      />
                    ))}
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map
                    style={{height: `100%`}}
                    cards={filteredCards}
                    activeCardId={activeCardId}
                    isMainMap={true}
                  />
                </div>
              </div>
            ) : (
              <NoCityOffers />
            )}
          </div>
        ) : (
          <LoaderScreensaver />
        )}
      </main>
    </div>
  );
};

export default MainScreen;
