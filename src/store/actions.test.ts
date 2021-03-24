import {ActionType} from "./action-types";
import {
  changeCity, changeCurrentSort, changeFavoriteStatus, changeFetchStatus, clearSingleOffersData,
  loadAllOffers,
  loadComments, loadFavoriteCards,
  loadOffersNearby,
  loadSingleOffer,
  logout, redirectToRoute,
  requireAuthorization,
  setUserData,
} from "./actions";
import {UserData} from "../types";
import {adaptCommentToClient, adaptToClient} from "../utils/adapters";

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
    const emptyOffersArray = [];
    const expectedActionForEmptyOffers = {
      type: ActionType.LOAD_ALL_OFFERS,
      payload: emptyOffersArray,
    };
    const offersArray = [
      {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13,
          },
        },
        preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
        images: [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
        ],
        title: `The house among olive `,
        is_favorite: false,
        is_premium: true,
        rating: 4,
        type: `room`,
        bedrooms: 2,
        max_adults: 2,
        price: 500,
        goods: [`Breakfast`, `Air conditioning`],
        host: {
          id: 25,
          name: `Madelina`,
          is_pro: true,
          avatar_url: `img/avatar-madelina.jpg`,
        },
        description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`,
        location: {
          latitude: 48.83861,
          longitude: 2.350499,
          zoom: 16,
        },
        id: 1,
      },
      {
        city: {
          name: `Brussels`,
          location: {
            latitude: 50.846557,
            longitude: 4.351697,
            zoom: 13,
          },
        },
        preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
        images: [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
        ],
        title: `Waterfront with extraordinary view`,
        is_favorite: false,
        is_premium: false,
        rating: 4.8,
        type: `apartment`,
        bedrooms: 5,
        max_adults: 6,
        price: 310,
        goods: [`Dishwasher`, `Towels`, `Washer`],
        host: {
          id: 25,
          name: `Angelina`,
          is_pro: true,
          avatar_url: `img/avatar-angelina.jpg`,
        },
        description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`,
        location: {
          latitude: 50.844556999999995,
          longitude: 4.346697,
          zoom: 16,
        },
        id: 2,
      },
    ];

    const expectedActionForNonEmptyArray = {
      type: ActionType.LOAD_ALL_OFFERS,
      payload: offersArray.map((offer) => adaptToClient(offer)),
    };

    expect(loadAllOffers(emptyOffersArray)).toEqual(
        expectedActionForEmptyOffers
    );
    expect(loadAllOffers(offersArray)).toEqual(expectedActionForNonEmptyArray);
  });

  it(`Action creator for loading a single offer works correctly`, () => {
    const testOffer = {
      city: {
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13,
        },
      },
      preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      images: [
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      ],
      title: `The house among olive `,
      is_favorite: false,
      is_premium: true,
      rating: 4,
      type: `room`,
      bedrooms: 2,
      max_adults: 2,
      price: 500,
      goods: [`Breakfast`, `Air conditioning`],
      host: {
        id: 25,
        name: `Madelina`,
        is_pro: true,
        avatar_url: `img/avatar-madelina.jpg`,
      },
      description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`,
      location: {
        latitude: 48.83861,
        longitude: 2.350499,
        zoom: 16,
      },
      id: 1,
    };
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
    const emptyCommentsArray = [];
    const testCommentsArray = [
      {
        id: 1,
        user: {
          id: 15,
          is_pro: false,
          name: `Kendall`,
          avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
        },
        rating: 3,
        comment: `We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)`,
        date: `2021-02-12T08:04:28.647Z`,
      },
      {
        id: 2,
        user: {
          id: 14,
          is_pro: true,
          name: `Corey`,
          avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
        },
        rating: 4,
        comment: `The deluxe room was a quite comfortable one with all the adequate facilities.`,
        date: `2021-02-12T08:04:28.647Z`,
      },
      {
        id: 3,
        user: {
          id: 18,
          is_pro: true,
          name: `Sophie`,
          avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`,
        },
        rating: 2,
        comment: `I stayed here for one night and it was an unpleasant experience.`,
        date: `2021-02-12T08:04:28.647Z`,
      },
    ];

    const expectedActionForEmptyCommentsArray = {
      type: ActionType.LOAD_COMMENTS,
      payload: emptyCommentsArray,
    };
    const expectedActionForCommentsArray = {
      type: ActionType.LOAD_COMMENTS,
      payload: testCommentsArray.map((comment) =>
        adaptCommentToClient(comment)
      ),
    };

    expect(loadComments(emptyCommentsArray)).toEqual(
        expectedActionForEmptyCommentsArray
    );
    expect(loadComments(testCommentsArray)).toEqual(
        expectedActionForCommentsArray
    );
  });

  it(`Action creator for loading offers nearby works correctly`, () => {
    const emptyOffersArray = [];
    const offersArray = [
      {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13,
          },
        },
        preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
        images: [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
        ],
        title: `The house among olive `,
        is_favorite: false,
        is_premium: true,
        rating: 4,
        type: `room`,
        bedrooms: 2,
        max_adults: 2,
        price: 500,
        goods: [`Breakfast`, `Air conditioning`],
        host: {
          id: 25,
          name: `Madelina`,
          is_pro: true,
          avatar_url: `img/avatar-madelina.jpg`,
        },
        description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`,
        location: {
          latitude: 48.83861,
          longitude: 2.350499,
          zoom: 16,
        },
        id: 1,
      },
      {
        city: {
          name: `Brussels`,
          location: {
            latitude: 50.846557,
            longitude: 4.351697,
            zoom: 13,
          },
        },
        preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
        images: [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
        ],
        title: `Waterfront with extraordinary view`,
        is_favorite: false,
        is_premium: false,
        rating: 4.8,
        type: `apartment`,
        bedrooms: 5,
        max_adults: 6,
        price: 310,
        goods: [`Dishwasher`, `Towels`, `Washer`],
        host: {
          id: 25,
          name: `Angelina`,
          is_pro: true,
          avatar_url: `img/avatar-angelina.jpg`,
        },
        description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`,
        location: {
          latitude: 50.844556999999995,
          longitude: 4.346697,
          zoom: 16,
        },
        id: 2,
      },
    ];

    const expectedActionForEmptyOffers = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: emptyOffersArray,
    };
    const expectedActionForNonEmptyArray = {
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: offersArray.map((offer) => adaptToClient(offer)),
    };

    expect(loadOffersNearby(emptyOffersArray)).toEqual(
        expectedActionForEmptyOffers
    );
    expect(loadOffersNearby(offersArray)).toEqual(
        expectedActionForNonEmptyArray
    );
  });

  it(`Action creator for clearing single offer's data works correctly`, () => {
    const expectedAction = {
      type: ActionType.CLEAR_SINGLE_OFFER_DATA,
      payload: {
        offer: null,
        offersNearby: [],
        comments: [],
        isOfferLoaded: false,
      }
    };

    expect(clearSingleOffersData()).toEqual(expectedAction);
  });

  it(`Action creator for changing current sort type works correctly`, () => {
    const sortType = `popular`;
    const expectedAction = {
      type: ActionType.CHANGE_SORT,
      payload: sortType
    };

    expect(changeCurrentSort(sortType)).toEqual(expectedAction);
  });

  it(`Action creator for redirection to route works correctly`, () => {
    const testUrl = `/mainPage`;
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: testUrl
    };

    expect(redirectToRoute(testUrl)).toEqual(expectedAction);
  });

  it(`Action creator for loading favorite cards works correctly`, () => {
    const favoriteOffersArray = [
      {
        city: {
          name: `Paris`,
          location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13,
          },
        },
        preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
        images: [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
        ],
        title: `The house among olive `,
        is_favorite: true,
        is_premium: true,
        rating: 4,
        type: `room`,
        bedrooms: 2,
        max_adults: 2,
        price: 500,
        goods: [`Breakfast`, `Air conditioning`],
        host: {
          id: 25,
          name: `Madelina`,
          is_pro: true,
          avatar_url: `img/avatar-madelina.jpg`,
        },
        description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`,
        location: {
          latitude: 48.83861,
          longitude: 2.350499,
          zoom: 16,
        },
        id: 1,
      },
      {
        city: {
          name: `Brussels`,
          location: {
            latitude: 50.846557,
            longitude: 4.351697,
            zoom: 13,
          },
        },
        preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
        images: [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
        ],
        title: `Waterfront with extraordinary view`,
        is_favorite: true,
        is_premium: false,
        rating: 4.8,
        type: `apartment`,
        bedrooms: 5,
        max_adults: 6,
        price: 310,
        goods: [`Dishwasher`, `Towels`, `Washer`],
        host: {
          id: 25,
          name: `Angelina`,
          is_pro: true,
          avatar_url: `img/avatar-angelina.jpg`,
        },
        description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`,
        location: {
          latitude: 50.844556999999995,
          longitude: 4.346697,
          zoom: 16,
        },
        id: 2,
      },
    ];

    const expectedAction = {
      type: ActionType.LOAD_FAVORITES,
      payload: favoriteOffersArray.map((offer) => adaptToClient(offer))
    };

    expect(loadFavoriteCards(favoriteOffersArray)).toEqual(expectedAction);
  });

  it(`Action creator for changing favorite status works correctly`, () => {
    const testCard = {
      city: {
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13,
        },
      },
      preview_image: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      images: [
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      ],
      title: `The house among olive `,
      is_favorite: true,
      is_premium: true,
      rating: 4,
      type: `room`,
      bedrooms: 2,
      max_adults: 2,
      price: 500,
      goods: [`Breakfast`, `Air conditioning`],
      host: {
        id: 25,
        name: `Madelina`,
        is_pro: true,
        avatar_url: `img/avatar-madelina.jpg`,
      },
      description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country.`,
      location: {
        latitude: 48.83861,
        longitude: 2.350499,
        zoom: 16,
      },
      id: 1,
    };
    const expectedAction = {
      type: ActionType.CHANGE_FAVORITE_STATUS,
      payload: adaptToClient(testCard)
    };

    expect(changeFavoriteStatus(testCard)).toEqual(expectedAction);
  });

  it(`Action creator for changing fetch status works correctly`, () => {
    const status = `done`;
    const reducerName = `data`;

    const expectedAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {status, reducerName}
    };

    expect(changeFetchStatus(status, reducerName)).toEqual(expectedAction);
  });
});
