import {createReducer} from "@reduxjs/toolkit";
import {Cities, SortType, FetchStatus} from "../../const";
import {allOffersInitialStateTypes} from "./all-offers-types";
import {
  changeCity,
  changeCurrentSort,
  changeFavoriteStatus,
  changeFetchStatus,
  loadAllOffers,
  loadFavoriteCards
} from "../actions";
import {OfferCard} from "../../types";

const initialState: allOffersInitialStateTypes = {
  currentCity: Cities[0],
  allOffers: [],
  currentSort: SortType.POPULAR,
  isDataLoaded: false,
  favoriteCards: [],
  areFavoriteCardsLoaded: false,
  fetchStatus: FetchStatus.PENDING,
  favoritesHaveBeenChanged: false
};

const changeOffersList = (stateOffers: Array<OfferCard>, changedCard: OfferCard): Array<OfferCard> => {
  const cardIndex = stateOffers.findIndex((card) => card.id === changedCard.id);
  if (cardIndex < 0) {
    return stateOffers;
  }
  return [...stateOffers.slice(0, cardIndex), changedCard, ...stateOffers.slice(cardIndex + 1)];
};

export const allOffers = createReducer(initialState, (builder) => {
  builder.addCase(changeCity, (state, action) => {
    state.currentCity = action.payload;
    state.currentSort = SortType.POPULAR;
  });
  builder.addCase(loadAllOffers, (state, action) => {
    state.allOffers = action.payload;
    state.isDataLoaded = true;
    state.favoritesHaveBeenChanged = false;
  });
  builder.addCase(changeCurrentSort, (state, action) => {
    state.currentSort = action.payload;
  });
  builder.addCase(loadFavoriteCards, (state, action) => {
    state.favoriteCards = action.payload;
    state.areFavoriteCardsLoaded = true;
    state.favoritesHaveBeenChanged = false;
  });
  builder.addCase(changeFavoriteStatus, (state, action) => {
    state.allOffers = changeOffersList(state.allOffers, action.payload);
    state.favoritesHaveBeenChanged = true;
  });
  builder.addCase(changeFetchStatus, (state, action) => {
    state.fetchStatus = action.payload;
  });
});

export type AllOffersReducerStateType = ReturnType<typeof allOffers>;
