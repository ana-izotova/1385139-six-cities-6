import {City} from "./types";

export const BLUE_COLOR = `#4481c3`;
export const IMAGES_PER_PAGE = 6;
export const COMMENTS_PER_PAGE = 10;
export const Comment = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300
};

export const Cities: Array<City> = [
  {
    name: `Paris`,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    }
  },
  {
    name: `Cologne`,
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    }
  },
  {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    }
  },
  {
    name: `Amsterdam`,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    }
  },
  {
    name: `Hamburg`,
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    }
  },
  {
    name: `Dusseldorf`,
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    }
  }
];

export enum AppRoute {
  MAIN_SCREEN = `/`,
  LOGIN_SCREEN = `/login`,
  FAVORITES_SCREEN = `/favorites`,
  OFFER_SCREEN = `/offer/:id`
}

export enum ApiRoute {
  LOGIN = `/login`,
  HOTELS = `/hotels`,
  LOGOUT = `/logout`,
  COMMENTS = `/comments`,
  FAVORITES = `/favorite`
}

export enum SortType {
  POPULAR = `Popular`,
  PRICE_LOW_TO_HIGH = `Price: low to high`,
  PRICE_HIGH_TO_LOW = `Price: high to low`,
  TOP_RATED_FIRST = `Top rated first`
}

export enum AuthorizationStatus {
  AUTH = `AUTH`,
  NO_AUTH = `NO_AUTH`,
}

export enum FavoriteStatus {
  FAVORITE = `1`,
  UNFAVORED = `0`
}

export enum FetchStatus {
  INIT = `INIT`,
  PENDING = `PENDING`,
  DONE = `DONE`,
  ERROR = `ERROR`
}

export const RatingTitles: Array<string> = [
  `perfect`,
  `good`,
  `not bad`,
  `badly`,
  `terribly`,
];

export enum NameSpace {
  USER = `USER`,
  ALL_OFFERS = `ALL_OFFERS`,
  SINGLE_OFFER = `SINGLE_OFFER`,
  FAVORITES = `FAVORITES`
}

export enum HttpCode {
  UNAUTHORIZED = 401,
  NOT_FOUND = 404
}
