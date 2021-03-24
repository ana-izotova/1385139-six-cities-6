import {favorites} from "./favorites";
import {ActionType} from "../action-types";
import {FavoritesInitialStateTypes} from "./favorites-types";
import {adaptToClient} from "../../utils/adapters";
import {fetchFavoriteCards} from "../api-actions";
import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../services/api";
import {ApiRoute} from "../../const";

const api = createAPI(() => {});
const testOffer = {
  "city": {
    "name": `Paris`,
    "location": {
      "latitude": 48.85661,
      "longitude": 2.351499,
      "zoom": 13,
    },
  },
  "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
  "images": [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
  ],
  "title": `The house among olive `,
  "is_favorite": true,
  "is_premium": true,
  "rating": 4,
  "type": `room`,
  "bedrooms": 2,
  "max_adults": 2,
  "price": 500,
  "goods": [`Breakfast`, `Air conditioning`],
  "host": {
    "id": 25,
    "name": `Madelina`,
    "is_pro": true,
    "avatar_url": `img/avatar-madelina.jpg`,
  },
  "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`,
  "location": {
    "latitude": 48.83861,
    "longitude": 2.350499,
    "zoom": 16,
  },
  "id": 1,
};
const adaptedTestOffer = adaptToClient(testOffer);

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
