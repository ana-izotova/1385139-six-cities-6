import {allOffers} from "./all-offers";
import {ActionType} from "../action-types";
import {ApiRoute, Cities, FavoriteStatus, FetchStatus, SortType} from "../../const";
import {AllOffersInitialStateTypes} from "./all-offers-types";
import {createAPI} from "../../services/api";
import {adaptToClient} from "../../utils/adapters";
import {NameSpace} from "../root-reducer";
import {fetchOffersData, changeCardFavoriteStatus} from "../api-actions";
import MockAdapter from "axios-mock-adapter";

const api = createAPI(() => {});
const testOffer1 = {
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
  "is_favorite": false,
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
const testOffer2 = {
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
  "is_favorite": false,
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
  "id": 2,
};
const adaptedTestOffer1 = adaptToClient(testOffer1);
const adaptedTestOffer2 = adaptToClient(testOffer2);

describe(`All offers' reducers work correctly`, () => {
  it(`Reducer should add offers to the state and change isDataLoaded and favoritesHaveBeenChanged flags`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [],
      currentSort: SortType.POPULAR,
      isDataLoaded: false,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: false
    };

    const getLoadAllOffersAction = {
      type: ActionType.LOAD_ALL_OFFERS,
      payload: [adaptedTestOffer1, adaptedTestOffer2]
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: false
    };

    expect(allOffers(initialState, getLoadAllOffersAction)).toEqual(expectedState);
  });

  it(`Reducer should change current city in the state and change sort type to default`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.TOP_RATED_FIRST,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: false
    };

    const getChangeCurrentCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: Cities[1]
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[1],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: false
    };

    expect(allOffers(initialState, getChangeCurrentCityAction)).toEqual(expectedState);
  });

  it(`Reducer should change sort type in the state`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: false
    };

    const getChangeSortAction = {
      type: ActionType.CHANGE_SORT,
      payload: SortType.TOP_RATED_FIRST
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.TOP_RATED_FIRST,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: false
    };

    expect(allOffers(initialState, getChangeSortAction)).toEqual(expectedState);
  });

  it(`Reducer should update all offers after change an offer's favorite status and change favoritesHaveBeenChanged flag`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: false
    };

    const adaptedTestOffer2Favorited = adaptToClient({
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
      "id": 2,
    });

    const getChangeFavoriteStatusAction = {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: adaptedTestOffer2Favorited
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2Favorited],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: true
    };

    expect(allOffers(initialState, getChangeFavoriteStatusAction)).toEqual(expectedState);
  });

  it(`Reducer should change fetch status and favoritesHaveBeenChanged flag`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.SENDING,
      favoritesHaveBeenChanged: true
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {reducerName: NameSpace.ALL_OFFERS, status: FetchStatus.DONE}
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.DONE,
      favoritesHaveBeenChanged: false
    };

    expect(allOffers(initialState, getChangeFetchStatusAction)).toEqual(expectedState);
  });

  it(`Reducer should change fetch status and not favoritesHaveBeenChanged flag`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: true
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {reducerName: NameSpace.ALL_OFFERS, status: FetchStatus.SENDING}
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.SENDING,
      favoritesHaveBeenChanged: true
    };

    expect(allOffers(initialState, getChangeFetchStatusAction)).toEqual(expectedState);
  });

  it(`Reducer shouldn't change fetch status and favoritesHaveBeenChanged flag`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: true
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {reducerName: NameSpace.SINGLE_OFFER, status: FetchStatus.SENDING}
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: true
    };

    expect(allOffers(initialState, getChangeFetchStatusAction)).toEqual(expectedState);
  });
});

describe(`Async operations should work correctly`, () => {
  it(`Should make a correct call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOffersDataLoader = fetchOffersData();

    apiMock
      .onGet(ApiRoute.HOTELS)
      .reply(200, [testOffer1, testOffer2]);

    return fetchOffersDataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_ALL_OFFERS,
          payload: [adaptedTestOffer1, adaptedTestOffer2]
        });
      });
  });

  it(`Should make a correct call to /favorites/id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testOfferId = 1;
    const favoriteStatus = FavoriteStatus.FAVORITE;
    const changeCardFavoriteStatusLoader = changeCardFavoriteStatus(testOfferId, favoriteStatus);

    const testOfferFavorited = {
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
    const adaptedTestOfferFavorited = adaptToClient(testOfferFavorited);

    apiMock
      .onPost(`${ApiRoute.FAVORITES}/${testOfferId}/${favoriteStatus}`)
      .reply(200, testOfferFavorited);

    return changeCardFavoriteStatusLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FAVORITE_STATUS,
          payload: adaptedTestOfferFavorited
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_FETCH_STATUS,
          payload: {status: FetchStatus.DONE, reducerName: NameSpace.ALL_OFFERS}
        });
      });
  });
});
