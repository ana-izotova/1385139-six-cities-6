import React, {useState} from "react";
import {useSelector} from "react-redux";
import {createSelector} from "reselect";
import Sorting from "../sorting/sorting";
import Map from "../map/map";
import {sortCards} from "../../utils/sorting";
import {RootStateType} from "../../store/root-reducer";
import {AllOffersReducerStateType} from "../../store/all-offers/all-offers";
import PlaceCard from "../place-card/place-card";

const NoCityOffers: React.FC = () => {
  const {currentCity} = useSelector(
      (state: RootStateType) => state.ALL_OFFERS
  );
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in{` `}
            {currentCity.name}
          </p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
};

const CityOffers: React.FC = () => {
  const {currentSort, currentCity} = useSelector(
      (state: RootStateType) => state.ALL_OFFERS
  );
  const allOffersState = useSelector(
      (state: RootStateType) => state.ALL_OFFERS
  );
  const [activeCardId, setActiveCardId] = useState(null);

  const cardsSelector = (state: AllOffersReducerStateType) => state.allOffers;
  const currentCitySelector = (state: AllOffersReducerStateType) =>
    state.currentCity;

  const getFilteredCards = createSelector(
      cardsSelector,
      currentCitySelector,
      (offerCards, city) =>
        offerCards.filter((offerCard) => offerCard.city.name === city.name)
  );

  const filteredCards = getFilteredCards(allOffersState);
  const sortedCards = sortCards(filteredCards, currentSort);
  const offersAmount = filteredCards.length;

  return (
    <div className="cities">
      {offersAmount ? (
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {offersAmount} {offersAmount > 1 ? `places` : `place`} to stay in{` `}
              {currentCity.name}
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
  );
};

export default CityOffers;
