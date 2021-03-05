import React from "react";
import OffersList from "../offers-list/offers-list";
import Sorting from "../sorting/sorting";
import Map from "../map/map";
import {CityOffersProps, NoCityOffersProps} from "./city-offers-types";
import {StateTypes} from "../../store/store-types";
import {connect} from "react-redux";
import {sortCards} from "../../utils/sorting";

const NoCityOffers: React.FC<NoCityOffersProps> = ({city}) => {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">
            We could not find any property available at the moment in {city.name}
          </p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
};

const CityOffers: React.FC<CityOffersProps> = ({cards, currentCity, currentSort}) => {
  const filteredCards = cards.filter((card) => card.city.name === currentCity.name);
  const sortedCards = sortCards(filteredCards, currentSort);
  const offersAmount = filteredCards.length;

  return (
    <div className="cities">
      {offersAmount ? (
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {offersAmount} places to stay in {currentCity.name}
            </b>
            <Sorting />
            <OffersList cards={sortedCards} offerType="cities" />
          </section>
          <div className="cities__right-section">
            <Map style={{height: `100%`}} cards={filteredCards} isMainMap={true}/>
          </div>
        </div>
      ) : (
        <NoCityOffers city={currentCity} />
      )}
    </div>
  );
};

const mapStateToProps = ({currentCity, offers, isDataLoaded, currentSort}: StateTypes) => ({
  currentSort,
  currentCity,
  cards: offers,
  isDataLoaded
});

export {CityOffers};
export default connect(mapStateToProps)(CityOffers);
