import {favorites} from "./favorites";
import {ActionType} from "../action-types";

describe(`Favorites' reducers should work correctly`, () => {
  it(`Reducer should add favorite cards to the state and change areFavoriteCardsLoaded flag`, () => {
    const initialState = {
      favoriteCards: [],
      areFavoriteCardsLoaded: false
    };

    const getLoadFavoriteCardsAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: [{foo: `foo`}, {bar: `bar`}]
    };

    const expectedState = {
      favoriteCards: [{foo: `foo`}, {bar: `bar`}],
      areFavoriteCardsLoaded: true
    };

    expect(favorites(initialState, getLoadFavoriteCardsAction)).toEqual(expectedState);
  });
});
