import React from "react";
import PlaceCard from "../place-card/place-card";
import {OffersListProps} from "./offers-list-types";
import {Dispatch} from "redux";
import {OfferCard} from "../../types";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";

const OffersList: React.FC<OffersListProps> = ({cards, offerType, mouseEventHandler}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {cards.map((card) => (
        <PlaceCard card={card} offerType={offerType} key={card.id} activeCardChangeStateHandler={mouseEventHandler}/>
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  mouseEventHandler(card: OfferCard) {
    dispatch(ActionCreator.changeActiveCard(card));
  },
});

export {OffersList};
export default connect(null, mapDispatchToProps)(OffersList);
