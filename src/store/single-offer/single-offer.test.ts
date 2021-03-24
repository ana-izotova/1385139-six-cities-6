import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../services/api";
import {singleOffer} from "./single-offer";
import {ActionType} from "../action-types";
import {
  fetchOffersNearby,
  fetchSingleOffersData,
  changeFavoriteOfferScreenStatus,
  sendComment,
  fetchOfferComments
} from "../api-actions";
import {ApiRoute, FavoriteStatus, FetchStatus} from "../../const";
import {NameSpace} from "../root-reducer";
import {adaptCommentToClient, adaptToClient} from "../../utils/adapters";
import {SingleOfferInitialStateTypes} from "./single-offer-types";

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
const adaptedTestOffer = adaptToClient(testOffer);
const testComment = {
  "id": 1,
  "user": {
    "id": 15,
    "is_pro": false,
    "name": `Kendall`,
    "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
  },
  "rating": 3,
  "comment": `We loved it so much, the house, the veiw, the location just great.. Highly recommend :)`,
  "date": `2021-02-12T08:04:28.647Z`,
};
const adaptedTestComment = adaptCommentToClient(testComment);


describe(`Single offer's reducers should work correctly`, () => {
  it(`Reducer should add offer to the state and change isOfferLoaded flag`, () => {
    const initialState: SingleOfferInitialStateTypes = {
      offer: null,
      offersNearby: [],
      comments: [],
      isOfferLoaded: false,
      fetchStatus: FetchStatus.PENDING
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
      fetchStatus: FetchStatus.PENDING
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
      fetchStatus: FetchStatus.PENDING
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
      fetchStatus: FetchStatus.PENDING
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
      fetchStatus: FetchStatus.PENDING
    };

    const getLoadCommentsAction = {
      type: ActionType.LOAD_COMMENTS,
      payload: [adaptedTestComment]
    };

    const expectedState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [adaptedTestOffer, adaptedTestOffer],
      comments: [adaptedTestComment],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.PENDING
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
      fetchStatus: FetchStatus.PENDING
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

    const expectedState: SingleOfferInitialStateTypes = {
      offer: null,
      offersNearby: [],
      comments: [],
      isOfferLoaded: false,
      fetchStatus: FetchStatus.PENDING
    };

    expect(singleOffer(initialState, getClearSingleOfferDataAction)).toEqual(expectedState);
  });

  it(`Reducer should change fetch status`, () => {
    const initialState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.PENDING
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {reducerName: NameSpace.SINGLE_OFFER, status: FetchStatus.SENDING}
    };

    const expectedState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.SENDING
    };

    expect(singleOffer(initialState, getChangeFetchStatusAction)).toEqual(expectedState);
  });

  it(`Reducer shouldn't change fetch status`, () => {
    const initialState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.PENDING
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {reducerName: NameSpace.ALL_OFFERS, status: FetchStatus.SENDING}
    };

    const expectedState: SingleOfferInitialStateTypes = {
      offer: adaptedTestOffer,
      offersNearby: [],
      comments: [],
      isOfferLoaded: true,
      fetchStatus: FetchStatus.PENDING
    };

    expect(singleOffer(initialState, getChangeFetchStatusAction)).toEqual(expectedState);
  });
});

describe(`Async operations work correctly`, () => {
  const testOfferId = 1;

  it(`Should make a correct call to /hotels/id to get a single offer's data`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchSingleOffersDataLoader = fetchSingleOffersData(testOfferId);

    apiMock
      .onGet(`${ApiRoute.HOTELS}/${testOfferId}`)
      .reply(200, testOffer);

    return fetchSingleOffersDataLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_SINGLE_OFFER,
          payload: adaptedTestOffer
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

    return fetchOffersNearbyLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_NEARBY,
          payload: [adaptedTestOffer]
        });
      });
  });

  it(`Should make a correct call to /favorite/id/isFavorite to change favorite status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoriteStatus = FavoriteStatus.FAVORITE;
    const changeFavoriteOfferScreenStatusLoader = changeFavoriteOfferScreenStatus(testOfferId, favoriteStatus);

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

    return changeFavoriteOfferScreenStatusLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FAVORITE_STATUS,
          payload: adaptedTestOfferFavorited
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_SINGLE_OFFER,
          payload: adaptedTestOfferFavorited
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.CHANGE_FETCH_STATUS,
          payload: {status: FetchStatus.DONE, reducerName: NameSpace.ALL_OFFERS}
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

    return fetchOfferCommentsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [adaptedTestComment]
        });
      });
  });

  it(`Should make a correct call tp /comments/id to post a comment`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testCommentToPost = {
      "comment": `We loved it so much, the house, the veiw, the location just great.. Highly recommend :)`,
      "rating": 3
    };
    const sendCommentLoader = sendComment(testOfferId, testCommentToPost);

    apiMock
      .onPost(`${ApiRoute.COMMENTS}/${testOfferId}`)
      .reply(200, [testComment]);

    return sendCommentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_COMMENTS,
          payload: [adaptedTestComment]
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_FETCH_STATUS,
          payload: {status: FetchStatus.DONE, reducerName: NameSpace.SINGLE_OFFER}
        });
      });
  });
});
