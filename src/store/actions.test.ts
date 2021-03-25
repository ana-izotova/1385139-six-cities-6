import {ActionType} from "./action-types";
import {
  changeCity,
  changeCurrentSort,
  changeFavoriteStatus,
  changeFetchStatus,
  clearSingleOffersData,
  loadAllOffers,
  loadComments,
  loadFavoriteCards,
  loadOffersNearby,
  loadSingleOffer,
  logout,
  redirectToRoute,
  requireAuthorization,
  setUserData,
} from "./actions";
import {UserData} from "../types";
import {adaptCommentToClient, adaptToClient} from "../utils/adapters";
import {
  testComment,
  testOffer,
  testOffer2,
  testOffer2Favorited,
  testOfferFavorited,
} from "../test-mocks/server-data-mock";
import {AppRoute, FetchStatus, NameSpace, SortType} from "../const";

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing city returns correct city`, () => {
    const testCity = {
      name: `Montreal`,
      location: {
        latitude: 45.508888,
        longitude: -73.561668,
        zoom: 16,
      },
    };
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: testCity,
    };

    expect(changeCity(testCity)).toEqual(expectedAction);
  });

  it(`Action creator for loading all offers works correctly`, () => {
    const emptyOffers: any = [];
    const offers = [testOffer, testOffer2];

    const expectedActionForEmptyOffers = {
      type: ActionType.LOAD_ALL_OFFERS,
      payload: emptyOffers,
    };

    const expectedActionForNonEmptyOffers = {
      type: ActionType.LOAD_ALL_OFFERS,
      payload: offers.map((offer) => adaptToClient(offer)),
    };

    expect(loadAllOffers(emptyOffers)).toEqual(expectedActionForEmptyOffers);
    expect(loadAllOffers(offers)).toEqual(expectedActionForNonEmptyOffers);
  });

  it(`Action creator for loading a single offer works correctly`, () => {
    const expectedAction = {
      type: ActionType.LOAD_SINGLE_OFFER,
      payload: adaptToClient(testOffer),
    };

    expect(loadSingleOffer(testOffer)).toEqual(expectedAction);
  });

  it(`Action creator for requiring authorization works correctly`, () => {
    const authorizationStatus = `authorized`;
    const expectedAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: authorizationStatus,
    };

    expect(requireAuthorization(authorizationStatus)).toEqual(expectedAction);
  });

  it(`Action creator for setting user data works correctly`, () => {
    const testUserData: UserData = {
      login: `johndoe@mail.com`,
      userAvatar: `johndoe.jpg`,
    };
    const expectedAction = {
      type: ActionType.SET_USER_DATA,
      payload: testUserData,
    };

    expect(setUserData(testUserData)).toEqual(expectedAction);
  });

  it(`Action creator for logout works correctly`, () => {
    const authorizationStatus = `unauthorized`;
    const expectedAction = {
      type: ActionType.LOGOUT,
      payload: authorizationStatus,
    };

    expect(logout(authorizationStatus)).toEqual(expectedAction);
  });

  it(`Action creator for loading comments works correctly`, () => {
    const emptyComments: any = [];
    const comments = [testComment, testComment];

    const expectedActionForEmptyCommentsArray = {
      type: ActionType.LOAD_COMMENTS,
      payload: emptyComments,
    };
    const expectedActionForCommentsArray = {
      type: ActionType.LOAD_COMMENTS,
      payload: comments.map((comment) => adaptCommentToClient(comment)),
    };

    expect(loadComments(emptyComments)).toEqual(
        expectedActionForEmptyCommentsArray
    );
    expect(loadComments(comments)).toEqual(expectedActionForCommentsArray);
  });

  it(`Action creator for loading offers nearby works correctly`, () => {
    const emptyOffers: any = [];
    const offers = [testOffer, testOffer2];

    const expectedActionForEmptyOffers = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: emptyOffers,
    };
    const expectedActionForNonEmptyArray = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offers.map((offer) => adaptToClient(offer)),
    };

    expect(loadOffersNearby(emptyOffers)).toEqual(expectedActionForEmptyOffers);
    expect(loadOffersNearby(offers)).toEqual(expectedActionForNonEmptyArray);
  });

  it(`Action creator for clearing single offer's data works correctly`, () => {
    const expectedAction = {
      type: ActionType.CLEAR_SINGLE_OFFER_DATA,
    };

    expect(clearSingleOffersData()).toEqual(expectedAction);
  });

  it(`Action creator for changing current sort type works correctly`, () => {
    const sortType = SortType.POPULAR;
    const expectedAction = {
      type: ActionType.CHANGE_SORT,
      payload: sortType,
    };

    expect(changeCurrentSort(sortType)).toEqual(expectedAction);
  });

  it(`Action creator for redirection to route works correctly`, () => {
    const testUrl = AppRoute.MAIN_SCREEN;
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: testUrl,
    };

    expect(redirectToRoute(testUrl)).toEqual(expectedAction);
  });

  it(`Action creator for loading favorite cards works correctly`, () => {
    const favoriteOffers = [testOfferFavorited, testOffer2Favorited];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: favoriteOffers.map((offer) => adaptToClient(offer)),
    };

    expect(loadFavoriteCards(favoriteOffers)).toEqual(expectedAction);
  });

  it(`Action creator for changing favorite status works correctly`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: adaptToClient(testOfferFavorited),
    };

    expect(changeFavoriteStatus(testOfferFavorited)).toEqual(expectedAction);
  });

  it(`Action creator for changing fetch status works correctly`, () => {
    const status = FetchStatus.DONE;
    const reducerName = NameSpace.USER;

    const expectedAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {status, reducerName},
    };

    expect(changeFetchStatus(status, reducerName)).toEqual(expectedAction);
  });
});
