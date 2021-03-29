import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../services/api";
import {singleOffer} from "./single-offer";
import {ActionType} from "../action-types";
import {
  fetchOffersNearby,
  fetchSingleOffersData,
  changeFavoriteOfferScreenStatus,
  sendComment,
  fetchOfferComments,
} from "../api-actions";
import {ApiRoute, FavoriteStatus, FetchStatus, HttpCode} from "../../const";
import {NameSpace} from "../../const";
import {SingleOfferInitialStateTypes} from "./single-offer-types";
import {
  testOffer,
  testComment,
  testOfferFavorited,
} from "../../test-mocks/server-data-mock";
import {
  adaptedTestOffer,
  adaptedTestComment,
  adaptedTestOfferFavorited,
} from "../../test-mocks/adapted-data-mock";

const api = createAPI(() => {});

describe(`Single offer's reducers should work correctly`, () => {
  it(`Reducer should add offer to the state and change isOfferLoaded flag`, () => {
    const initialState: SingleOfferInitialStateTypes = {
      offer: null,
      offersNearby: [],
      comments: [],
      isOfferLoaded: false,
      fetchStatus: FetchStatus.INIT,
      error: null
    };

    const getLoadSingleOfferAction = {
      type: ActionType.LOAD_SINGLE_OFFER,
      payload: adaptedTestOffer,
    };

    const expectedState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.INIT,
      error: null
    };

    expect(singleOffer(initialState, getLoadSingleOfferAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer should add offers nearby to the state`, () => {
    const initialState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.INIT,
      error: null
    };

    const getLoadOffersNearbyAction = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: [adaptedTestOffer, adaptedTestOffer],
    };

    const expectedState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [adaptedTestOffer, adaptedTestOffer],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.INIT,
      error: null
    };

    expect(singleOffer(initialState, getLoadOffersNearbyAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer should add comments to the state`, () => {
    const initialState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [adaptedTestOffer, adaptedTestOffer],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.INIT,
      error: null
    };

    const getLoadCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: [adaptedTestComment],
    };

    const expectedState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [adaptedTestOffer, adaptedTestOffer],
      comments: [adaptedTestComment],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.INIT,
      error: null
    };

    expect(singleOffer(initialState, getLoadCommentsAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer should clean all single offer's data`, () => {
    const initialState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [adaptedTestOffer, adaptedTestOffer],
      comments: [adaptedTestComment],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.INIT,
      error: null
    };

    const getClearSingleOfferDataAction = {
      type: ActionType.CLEAR_SINGLE_OFFER_DATA,
    };

    const expectedState: SingleOfferInitialStateTypes = {
      offer: null,
      offersNearby: [],
      comments: [],
      isOfferLoaded: false,
      fetchStatus: FetchStatus.INIT,
      error: null
    };

    expect(singleOffer(initialState, getClearSingleOfferDataAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer should change fetch status`, () => {
    const initialState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.INIT,
      error: null
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {
        reducerName: NameSpace.SINGLE_OFFER,
        status: FetchStatus.PENDING,
      },
    };

    const expectedState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.PENDING,
      error: null
    };

    expect(singleOffer(initialState, getChangeFetchStatusAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer shouldn't change fetch status`, () => {
    const initialState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.INIT,
      error: null
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {
        reducerName: NameSpace.ALL_OFFERS,
        status: FetchStatus.PENDING,
      },
    };

    const expectedState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.INIT,
      error: null
    };

    expect(singleOffer(initialState, getChangeFetchStatusAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer should change error status`, () => {
    const initialState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.INIT,
      error: null
    };

    const getChangeErrorStatusAction = {
      type: ActionType.CHANGE_ERROR_STATUS,
      payload: {
        reducerName: NameSpace.SINGLE_OFFER,
        errorCode: HttpCode.NOT_FOUND,
      },
    };

    const expectedState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.INIT,
      error: HttpCode.NOT_FOUND
    };

    expect(singleOffer(initialState, getChangeErrorStatusAction)).toEqual(
        expectedState
    );
  });

  it(`Reducer shouldn't change error status`, () => {
    const initialState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.INIT,
      error: null
    };

    const getChangeErrorStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {
        reducerName: NameSpace.ALL_OFFERS,
        error: HttpCode.NOT_FOUND,
      },
    };

    const expectedState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.INIT,
      error: null
    };

    expect(singleOffer(initialState, getChangeErrorStatusAction)).toEqual(
        expectedState
    );
  });
});

describe(`Async operations work correctly`, () => {
  const testOfferId = 1;

  it(`Should make a correct call to /hotels/id to get a single offer's data`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchSingleOffersDataLoader = fetchSingleOffersData(testOfferId);

    apiMock.onGet(`${ApiRoute.HOTELS}/${testOfferId}`).reply(200, testOffer);

    return fetchSingleOffersDataLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CHANGE_FETCH_STATUS,
        payload: {
          status: FetchStatus.PENDING,
          reducerName: NameSpace.SINGLE_OFFER,
        }
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.LOAD_SINGLE_OFFER,
        payload: adaptedTestOffer,
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.CHANGE_FETCH_STATUS,
        payload: {
          status: FetchStatus.DONE,
          reducerName: NameSpace.SINGLE_OFFER,
        }
      });
    });
  });

  it(`Should catch errors correctly when call to /hotels/id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchSingleOffersDataLoader = fetchSingleOffersData(testOfferId);

    apiMock.onGet(`${ApiRoute.HOTELS}/${testOfferId}`).reply(404);

    return fetchSingleOffersDataLoader(dispatch, () => {}, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FETCH_STATUS,
          payload: {
            status: FetchStatus.ERROR,
            reducerName: NameSpace.SINGLE_OFFER,
          }
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_ERROR_STATUS,
          payload: {
            status: 404,
            reducerName: NameSpace.SINGLE_OFFER
          },
        });
      });
  });

  it(`Should make a correct call to /hotels/id/nearby to get nearby offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOffersNearbyLoader = fetchOffersNearby(testOfferId);

    apiMock
      .onGet(`${ApiRoute.HOTELS}/${testOfferId}/nearby`)
      .reply(200, [testOffer]);

    return fetchOffersNearbyLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_OFFERS_NEARBY,
        payload: [adaptedTestOffer],
      });
    });
  });

  it(`Should make a correct call to /favorite/id/isFavorite to change favorite status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteStatus = FavoriteStatus.FAVORITE;
    const changeFavoriteOfferScreenStatusLoader = changeFavoriteOfferScreenStatus(
        testOfferId,
        favoriteStatus
    );

    apiMock
      .onPost(`${ApiRoute.FAVORITES}/${testOfferId}/${favoriteStatus}`)
      .reply(200, testOfferFavorited);

    return changeFavoriteOfferScreenStatusLoader(dispatch, () => {}, api).then(
        () => {
          expect(dispatch).toHaveBeenCalledTimes(3);
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.CHANGE_FAVORITE_STATUS,
            payload: adaptedTestOfferFavorited,
          });
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.LOAD_SINGLE_OFFER,
            payload: adaptedTestOfferFavorited,
          });
          expect(dispatch).toHaveBeenNthCalledWith(3, {
            type: ActionType.CHANGE_FETCH_STATUS,
            payload: {
              status: FetchStatus.DONE,
              reducerName: NameSpace.ALL_OFFERS,
            },
          });
        }
    );
  });

  it(`Should catch errors correctly when call to /favorite/id/isFavorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteStatus = FavoriteStatus.FAVORITE;
    const changeFavoriteOfferScreenStatusLoader = changeFavoriteOfferScreenStatus(
        testOfferId,
        favoriteStatus
    );

    apiMock
      .onPost(`${ApiRoute.FAVORITES}/${testOfferId}/${favoriteStatus}`)
      .reply(400);

    return changeFavoriteOfferScreenStatusLoader(dispatch, () => {}, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_ERROR_STATUS,
          payload: {
            status: 400,
            reducerName: NameSpace.SINGLE_OFFER
          },
        });
      });
  });

  it(`Should make a correct call to /comments/id to get offer's comments`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOfferCommentsLoader = fetchOfferComments(testOfferId);

    apiMock
      .onGet(`${ApiRoute.COMMENTS}/${testOfferId}`)
      .reply(200, [testComment]);

    return fetchOfferCommentsLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.LOAD_COMMENTS,
        payload: [adaptedTestComment],
      });
    });
  });

  it(`Should make a correct call to /comments/id to post a comment`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testCommentToPost = {
      comment: `We loved it so much, the house, the view, the location just great.. Highly recommend :)`,
      rating: 3,
    };
    const sendCommentLoader = sendComment(testOfferId, testCommentToPost);

    apiMock
      .onPost(`${ApiRoute.COMMENTS}/${testOfferId}`)
      .reply(200, [testComment]);

    return sendCommentLoader(dispatch, () => {}, api).then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: ActionType.CHANGE_FETCH_STATUS,
        payload: {
          status: FetchStatus.PENDING,
          reducerName: NameSpace.SINGLE_OFFER,
        },
      });
      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: ActionType.LOAD_COMMENTS,
        payload: [adaptedTestComment],
      });
      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: ActionType.CHANGE_FETCH_STATUS,
        payload: {
          status: FetchStatus.DONE,
          reducerName: NameSpace.SINGLE_OFFER,
        },
      });
    });
  });

  it(`Should catch errors correctly when call to /comments/id to post a comment`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testCommentToPost = {
      comment: `We loved it so much, the house, the view, the location just great.. Highly recommend :)`,
      rating: 3,
    };
    const sendCommentLoader = sendComment(testOfferId, testCommentToPost);

    apiMock
      .onPost(`${ApiRoute.COMMENTS}/${testOfferId}`)
      .reply(400);

    return sendCommentLoader(dispatch, () => {}, api)
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_ERROR_STATUS,
          payload: {
            status: 400,
            reducerName: NameSpace.SINGLE_OFFER
          },
        });
      });
  });
});
