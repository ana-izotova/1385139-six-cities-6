import {allOffers} from "./all-offers";
import {ActionType} from "../action-types";
import {
  ApiRoute,
  Cities,
  FavoriteStatus,
  FetchStatus,
  SortType,
  NameSpace, HttpCode,
} from "../../const";
import {AllOffersInitialStateTypes} from "./all-offers-types";
import {createAPI} from "../../services/api";
import {fetchOffersData, changeCardFavoriteStatus} from "../api-actions";
import MockAdapter from "axios-mock-adapter";
import {
  testOffer as testOffer1,
  testOffer2,
  testOfferFavorited,
} from "../../test-mocks/server-data-mock";
import {
  adaptedTestOffer as adaptedTestOffer1,
  adaptedTestOffer2,
  adaptedTestOffer2Favorited,
  adaptedTestOfferFavorited,
} from "../../test-mocks/adapted-data-mock";

const api = createAPI(() => {});

describe(`All offers' reducers work correctly`, () => {
  it(`Reducer should add offers to the state and change isDataLoaded and favoritesHaveBeenChanged flags`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [],
      currentSort: SortType.POPULAR,
      isDataLoaded: false,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: false,
      error: null
    };

    const getLoadAllOffersAction = {
      type: ActionType.LOAD_ALL_OFFERS,
      payload: [adaptedTestOffer1, adaptedTestOffer2],
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: false,
      error: null
    };

    expect(allOffers(initialState, getLoadAllOffersAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer should change current city in the state and change sort type to default`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.TOP_RATED_FIRST,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: false,
      error: null
    };

    const getChangeCurrentCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: Cities[1],
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[1],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: false,
      error: null
    };

    expect(allOffers(initialState, getChangeCurrentCityAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer should change sort type in the state`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: false,
      error: null
    };

    const getChangeSortAction = {
      type: ActionType.CHANGE_SORT,
      payload: SortType.TOP_RATED_FIRST,
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.TOP_RATED_FIRST,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: false,
      error: null
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
      favoritesHaveBeenChanged: false,
      error: null
    };

    const getChangeFavoriteStatusAction = {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: adaptedTestOffer2Favorited,
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2Favorited],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: true,
      error: null
    };

    expect(allOffers(initialState, getChangeFavoriteStatusAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer should return default offers`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: false,
      error: null
    };

    const getChangeFavoriteStatusAction = {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: adaptedTestOffer2Favorited,
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: true,
      error: null
    };

    expect(allOffers(initialState, getChangeFavoriteStatusAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer should change fetch status and favoritesHaveBeenChanged flag`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: true,
      error: null
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {reducerName: NameSpace.ALL_OFFERS, status: FetchStatus.DONE},
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.DONE,
      favoritesHaveBeenChanged: false,
      error: null
    };

    expect(allOffers(initialState, getChangeFetchStatusAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer should change fetch status and not favoritesHaveBeenChanged flag`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.INIT,
      favoritesHaveBeenChanged: true,
      error: null
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {
        reducerName: NameSpace.ALL_OFFERS,
        status: FetchStatus.PENDING,
      },
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      favoritesHaveBeenChanged: true,
      error: null
    };

    expect(allOffers(initialState, getChangeFetchStatusAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer shouldn't change fetch status and favoritesHaveBeenChanged flag`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.INIT,
      favoritesHaveBeenChanged: true,
      error: null
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {
        reducerName: NameSpace.SINGLE_OFFER,
        status: FetchStatus.PENDING,
      },
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.INIT,
      favoritesHaveBeenChanged: true,
      error: null
    };

    expect(allOffers(initialState, getChangeFetchStatusAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer should change error status`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.INIT,
      favoritesHaveBeenChanged: true,
      error: null
    };

    const getChangeErrorStatusAction = {
      type: ActionType.CHANGE_ERROR_STATUS,
      payload: {
        reducerName: NameSpace.ALL_OFFERS,
        errorCode: HttpCode.NOT_FOUND
      },
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.INIT,
      favoritesHaveBeenChanged: true,
      error: HttpCode.NOT_FOUND
    };

    expect(allOffers(initialState, getChangeErrorStatusAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer shouldn't change error status`, () => {
    const initialState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.INIT,
      favoritesHaveBeenChanged: true,
      error: null
    };

    const getChangeErrorStatusAction = {
      type: ActionType.CHANGE_ERROR_STATUS,
      payload: {
        reducerName: NameSpace.SINGLE_OFFER,
        errorCode: HttpCode.NOT_FOUND
      },
    };

    const expectedState: AllOffersInitialStateTypes = {
      currentCity: Cities[0],
      allOffers: [adaptedTestOffer1, adaptedTestOffer2],
      currentSort: SortType.POPULAR,
      isDataLoaded: true,
      fetchStatus: FetchStatus.INIT,
      favoritesHaveBeenChanged: true,
      error: null
    };

    expect(allOffers(initialState, getChangeErrorStatusAction)).toEqual(
        expectedState
    );
  });
});

describe(`Async operations should work correctly`, () => {
  it(`Should make a correct call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOffersDataLoader = fetchOffersData();

    apiMock.onGet(ApiRoute.HOTELS).reply(200, [testOffer1, testOffer2]);

    return fetchOffersDataLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(4);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CHANGE_ERROR_STATUS,
        payload: {
          errorCode: null,
          reducerName: NameSpace.ALL_OFFERS,
        }
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.CHANGE_FETCH_STATUS,
        payload: {
          status: FetchStatus.PENDING,
          reducerName: NameSpace.ALL_OFFERS,
        }
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.LOAD_ALL_OFFERS,
        payload: [adaptedTestOffer1, adaptedTestOffer2],
      });
      expect(dispatch).toHaveBeenNthCalledWith(4, {
        type: ActionType.CHANGE_FETCH_STATUS,
        payload: {
          status: FetchStatus.DONE,
          reducerName: NameSpace.ALL_OFFERS,
        }
      });
    });
  });

  it(`Should make a correct call to /favorites/id/status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testOfferId = 1;
    const favoriteStatus = FavoriteStatus.FAVORITE;
    const changeCardFavoriteStatusLoader = changeCardFavoriteStatus(
        testOfferId,
        favoriteStatus
    );

    apiMock
      .onPost(`${ApiRoute.FAVORITES}/${testOfferId}/${favoriteStatus}`)
      .reply(200, testOfferFavorited);

    return changeCardFavoriteStatusLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CHANGE_FAVORITE_STATUS,
        payload: adaptedTestOfferFavorited,
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.CHANGE_FETCH_STATUS,
        payload: {
          status: FetchStatus.DONE,
          reducerName: NameSpace.ALL_OFFERS,
        },
      });
    });
  });
});
