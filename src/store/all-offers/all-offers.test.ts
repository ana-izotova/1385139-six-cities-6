import {allOffers} from "./all-offers";
import {ActionType} from "../action-types";

describe(`All offers' reducers work correctly`, () => {
  it(`Reducer should add offers to the state and change isDataLoaded and favoritesHaveBeenChanged flags`, () => {
    const initialState = {
      allOffers: [],
      isDataLoaded: false,
      favoritesHaveBeenChanged: true
    };

    const getLoadAllOffersAction = {
      type: ActionType.LOAD_ALL_OFFERS,
      payload: [{foo: `foo`}, {bar: `bar`}]
    };

    const expectedState = {
      allOffers: [{foo: `foo`}, {bar: `bar`}],
      isDataLoaded: true,
      favoritesHaveBeenChanged: false
    };

    expect(allOffers(initialState, getLoadAllOffersAction)).toEqual(expectedState);
  });

  it(`Reducer should change current city in the state and change sort type to default`, () => {
    const initialState = {
      currentCity: `Montreal`,
      currentSort: `Top rated`
    };

    const getChangeCurrentCityAction = {
      type: ActionType.CHANGE_CITY,
      payload: `Vancouver`
    };

    const expectedState = {
      currentCity: `Vancouver`,
      currentSort: `Popular`
    };

    expect(allOffers(initialState, getChangeCurrentCityAction)).toEqual(expectedState);
  });

  it(`Reducer should change sort type in the state`, () => {
    const initialState = {
      currentSort: `Popular`
    };

    const getChangeSortAction = {
      type: ActionType.CHANGE_SORT,
      payload: `Top rated first`
    };

    const expectedState = {
      currentSort: `Top rated first`
    };

    expect(allOffers(initialState, getChangeSortAction)).toEqual(expectedState);
  });

  it(`Reducer should update all offers after change an offer's favorite status and change favoritesHaveBeenChanged flag`, () => {
    const initialState = {
      allOffers: [
        {
          id: 1,
          name: `foo`
        },
        {
          id: 2,
          name: `bar`
        }
      ],
      favoritesHaveBeenChanged: false
    };

    const getChangeFavoriteStatusAction = {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: {
        id: 2,
        name: `foo`
      }
    };

    const expectedState = {
      allOffers: [
        {
          id: 1,
          name: `foo`
        },
        {
          id: 2,
          name: `foo`
        }
      ],
      favoritesHaveBeenChanged: true
    };

    expect(allOffers(initialState, getChangeFavoriteStatusAction)).toEqual(expectedState);
  });

  it(`Reducer should change fetch status and favoritesHaveBeenChanged flag`, () => {
    const initialState = {
      fetchStatus: `SENDING`,
      favoritesHaveBeenChanged: true
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {reducerName: `ALL_OFFERS`, status: `DONE`}
    };

    const expectedState = {
      fetchStatus: `DONE`,
      favoritesHaveBeenChanged: false
    };

    expect(allOffers(initialState, getChangeFetchStatusAction)).toEqual(expectedState);
  });

  it(`Reducer should change fetch status and not favoritesHaveBeenChanged flag`, () => {
    const initialState = {
      fetchStatus: `PENDING`,
      favoritesHaveBeenChanged: true
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {reducerName: `ALL_OFFERS`, status: `SENDING`}
    };

    const expectedState = {
      fetchStatus: `SENDING`,
      favoritesHaveBeenChanged: true
    };

    expect(allOffers(initialState, getChangeFetchStatusAction)).toEqual(expectedState);
  });

  it(`Reducer shouldn't change fetch status and favoritesHaveBeenChanged flag`, () => {
    const initialState = {
      fetchStatus: `PENDING`,
      favoritesHaveBeenChanged: true
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {reducerName: `SINGLE_OFFER`, status: `SENDING`}
    };

    const expectedState = {
      fetchStatus: `PENDING`,
      favoritesHaveBeenChanged: true
    };

    expect(allOffers(initialState, getChangeFetchStatusAction)).toEqual(expectedState);
  });
});
