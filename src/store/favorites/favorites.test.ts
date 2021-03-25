import {favorites} from "./favorites";
import {ActionType} from "../action-types";
import {FavoritesInitialStateTypes} from "./favorites-types";
import {fetchFavoriteCards} from "../api-actions";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../services/api";
import {ApiRoute} from "../../const";
import {testOffer} from "../../test-mocks/server-data-mock";
import {adaptedTestOffer} from "../../test-mocks/adapted-data-mock";

const api = createAPI(() => {});

describe(`Favorites' reducers should work correctly`, () => {
  it(`Reducer should add favorite cards to the state and change areFavoriteCardsLoaded flag`, () => {
    const initialState: FavoritesInitialStateTypes = {
      favoriteCards: [],
      areFavoriteCardsLoaded: false
    };

    const getLoadFavoriteCardsAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: [adaptedTestOffer, adaptedTestOffer]
    };

    const expectedState = {
      favoriteCards: [adaptedTestOffer, adaptedTestOffer],
      areFavoriteCardsLoaded: true
    };

    expect(favorites(initialState, getLoadFavoriteCardsAction)).toEqual(expectedState);
  });
});

describe(`Async operations should work correctly`, () => {
  it(`Should make a correct call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoriteCardsLoader = fetchFavoriteCards();

    apiMock
      .onGet(ApiRoute.FAVORITES)
      .reply(200, [testOffer]);

    return fetchFavoriteCardsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: [adaptedTestOffer]
        });
      });
  });
});
