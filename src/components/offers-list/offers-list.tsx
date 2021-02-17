import React from "react";
import PlaceCard from "../place-card/place-card";
import {OfferListProps} from "./offer-list-types";

const OfferList: React.FC<OfferListProps> = ({cards, offerType}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (
        <PlaceCard card={card} offerType={offerType} key={card.id} />
      ))}
    </div>
  );
};

export default OfferList;
