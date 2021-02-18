import React, {useState} from "react";
import PlaceCard from "../place-card/place-card";
import {OffersListProps} from "./offers-list-types";

const OffersList: React.FC<OffersListProps> = ({cards, offerType}) => {
  const [, setActiveCard] = useState(null);
  const activeCardChangeStateHandler = (id: number): void => {
    setActiveCard(id);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (
        <PlaceCard card={card} offerType={offerType} key={card.id} changeStateHandler={activeCardChangeStateHandler}/>
      ))}
    </div>
  );
};

export default OffersList;
