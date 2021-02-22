import React from "react";
import OffersList from "../offers-list/offers-list";
import SortingList from "../sorting-list/sorting-list";
import Map from "../map/map";
import {CityOffersProps, NoCityOffersProps} from "./city-offers-types";

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

const CityOffers: React.FC<CityOffersProps> = ({cards, city}) => {
  const offersAmount = cards.length;
  return (
    <div className="cities">
      {offersAmount ? (
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">
              {cards.length} places to stay in {city.name}
            </b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex={0}>
                Popular
                <svg
                  className="places__sorting-arrow"
                  style={{width: 7, height: 4}}
                >
                  <use xlinkHref="#icon-arrow-select"></use>
                </svg>
              </span>
              <SortingList />
            </form>
            <OffersList cards={cards} offerType="cities" />
          </section>
          <div className="cities__right-section">
            <Map city={city} cards={cards}/>
          </div>
        </div>
      ) : (
        <NoCityOffers city={city} />
      )}
    </div>
  );
};

export default CityOffers;
