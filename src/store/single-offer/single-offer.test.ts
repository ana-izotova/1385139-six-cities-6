import {singleOffer} from "./single-offer";
import {ActionType} from "../action-types";

describe(`Single offer's reducers should work correctly`, () => {
  it(`Reducer should add offer to the state and change isOfferLoaded flag`, () => {
    const initialState = {
      offer: null,
      isOfferLoaded: false,
    };

    const getLoadSingleOfferAction = {
      type: ActionType.LOAD_SINGLE_OFFER,
      payload: {foo: `foo`},
    };

    const expectedState = {
      offer: {foo: `foo`},
      isOfferLoaded: true,
    };

    expect(singleOffer(initialState, getLoadSingleOfferAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer should add offers nearby to the state`, () => {
    const initialState = {
      offersNearby: [],
    };

    const getLoadOffersNearbyAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: [{foo: `foo`}, {bar: `bar`}],
    };

    const expectedState = {
      offersNearby: [{foo: `foo`}, {bar: `bar`}],
    };

    expect(singleOffer(initialState, getLoadOffersNearbyAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer should add comments to the state`, () => {
    const initialState = {
      comments: [],
    };

    const getLoadCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: [{foo: `foo`}, {bar: `bar`}],
    };

    const expectedState = {
      comments: [{foo: `foo`}, {bar: `bar`}],
    };

    expect(singleOffer(initialState, getLoadCommentsAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer should clean all single offer's data`, () => {
    const initialState = {
      offer: {foo: `foo`},
      offersNearby: [{foo: `foo`}, {bar: `bar`}],
      comments: [{foo: `foo`}, {bar: `bar`}],
      isOfferLoaded: true,
    };

    const getClearSingleOfferDataAction = {
      type: ActionType.CLEAR_SINGLE_OFFER_DATA,
      payload: {
        offer: null,
        offersNearby: [],
        comments: [],
        isOfferLoaded: false,
      },
    };

    const expectedState = {
      offer: null,
      offersNearby: [],
      comments: [],
      isOfferLoaded: false,
    };

    expect(singleOffer(initialState, getClearSingleOfferDataAction)).toEqual(expectedState);
  });

  it(`Reducer should change fetch status`, () => {
    const initialState = {
      fetchStatus: `PENDING`
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {reducerName: `SINGLE_OFFER`, status: `SENDING`}
    };

    const expectedState = {
      fetchStatus: `SENDING`
    };

    expect(singleOffer(initialState, getChangeFetchStatusAction)).toEqual(expectedState);
  });

  it(`Reducer shouldn't change fetch status`, () => {
    const initialState = {
      fetchStatus: `PENDING`
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {reducerName: `ALL_OFFERS`, status: `SENDING`}
    };

    const expectedState = {
      fetchStatus: `PENDING`
    };

    expect(singleOffer(initialState, getChangeFetchStatusAction)).toEqual(expectedState);
  });
});
