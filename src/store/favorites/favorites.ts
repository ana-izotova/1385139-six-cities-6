import {createReducer} from "@reduxjs/toolkit";
import {FavoritesInitialStateTypes} from "./favorites-types";
import {loadFavoriteCards} from "../actions";

export const initialState: FavoritesInitialStateTypes = {
  favoriteCards: [],
  areFavoriteCardsLoaded: false
};

export const favorites = createReducer(initialState, (builder) => {
  builder.addCase(loadFavoriteCards, (state, action) => {
    state.favoriteCards = action.payload;
    state.areFavoriteCardsLoaded = true;
  });
});
