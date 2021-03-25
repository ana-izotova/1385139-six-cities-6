import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../services/api";
import {user} from "./user";
import {ActionType} from "../action-types";
import {checkAuth, login, logoutFromSite} from "../api-actions";
import {ApiRoute, AppRoute, AuthorizationStatus, FetchStatus, NameSpace} from "../../const";
import {UserInitialStateTypes} from "./user-types";

const api = createAPI(() => {});

describe(`User's reducers should work correctly`, () => {
  it(`Reducer should change authorization status correctly`, () => {
    const initialState: UserInitialStateTypes = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      login: ``,
      userAvatar: ``,
      fetchStatus: FetchStatus.INIT
    };

    const getRequireAuthorizationAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    };

    const expectedState: UserInitialStateTypes = {
      authorizationStatus: AuthorizationStatus.AUTH,
      login: ``,
      userAvatar: ``,
      fetchStatus: FetchStatus.INIT
    };

    expect(user(initialState, getRequireAuthorizationAction)).toEqual(expectedState);
  });

  it(`Reducer should set user's data correctly`, () => {
    const initialState: UserInitialStateTypes = {
      authorizationStatus: AuthorizationStatus.AUTH,
      login: ``,
      userAvatar: ``,
      fetchStatus: FetchStatus.INIT
    };

    const getSetUserDataAction = {
      type: ActionType.SET_USER_DATA,
      payload: {
        login: `johndoe@mail.com`,
        userAvatar: `johndoe.jpg`
      }
    };

    const expectedState: UserInitialStateTypes = {
      authorizationStatus: AuthorizationStatus.AUTH,
      login: `johndoe@mail.com`,
      userAvatar: `johndoe.jpg`,
      fetchStatus: FetchStatus.INIT
    };

    expect(user(initialState, getSetUserDataAction)).toEqual(expectedState);
  });

  it(`Reducer should change authorization status correctly to unauthorized`, () => {
    const initialState: UserInitialStateTypes = {
      authorizationStatus: AuthorizationStatus.AUTH,
      login: `johndoe@mail.com`,
      userAvatar: `johndoe.jpg`,
      fetchStatus: FetchStatus.INIT
    };

    const getLogoutAction = {
      type: ActionType.LOGOUT,
      payload: AuthorizationStatus.NO_AUTH
    };

    const expectedState: UserInitialStateTypes = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      login: `johndoe@mail.com`,
      userAvatar: `johndoe.jpg`,
      fetchStatus: FetchStatus.INIT
    };

    expect(user(initialState, getLogoutAction)).toEqual(expectedState);
  });

  it(`Reducer should change fetch status`, () => {
    const initialState: UserInitialStateTypes = {
      authorizationStatus: AuthorizationStatus.AUTH,
      login: ``,
      userAvatar: ``,
      fetchStatus: FetchStatus.INIT
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {reducerName: NameSpace.USER, status: FetchStatus.PENDING}
    };

    const expectedState: UserInitialStateTypes = {
      authorizationStatus: AuthorizationStatus.AUTH,
      login: ``,
      userAvatar: ``,
      fetchStatus: FetchStatus.PENDING
    };

    expect(user(initialState, getChangeFetchStatusAction)).toEqual(expectedState);
  });

  it(`Reducer shouldn't change fetch status`, () => {
    const initialState: UserInitialStateTypes = {
      authorizationStatus: AuthorizationStatus.AUTH,
      login: ``,
      userAvatar: ``,
      fetchStatus: FetchStatus.INIT
    };

    const getChangeFetchStatusAction = {
      type: ActionType.CHANGE_FETCH_STATUS,
      payload: {reducerName: NameSpace.ALL_OFFERS, status: FetchStatus.PENDING}
    };

    const expectedState: UserInitialStateTypes = {
      authorizationStatus: AuthorizationStatus.AUTH,
      login: ``,
      userAvatar: ``,
      fetchStatus: FetchStatus.INIT
    };

    expect(user(initialState, getChangeFetchStatusAction)).toEqual(expectedState);
  });
});

describe(`Async operations work correctly`, () => {
  it(`Should make a correct call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(ApiRoute.LOGIN)
      .reply(200, {
        "email": `jondoe@mail.com`,
        "avatar_url": `avatar.jpg`
      });

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_USER_DATA,
          payload: {login: `jondoe@mail.com`, userAvatar: `avatar.jpg`}
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
      });
  });

  it(`Should make a correct call to /login and get login data`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginLoader = login({login: `jondoe@mail.com`, password: `12345`});

    apiMock
      .onPost(ApiRoute.LOGIN)
      .reply(200, {
        "email": `jondoe@mail.com`,
        "avatar_url": `avatar.jpg`
      });

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(5);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.CHANGE_FETCH_STATUS,
          payload: {status: FetchStatus.PENDING, reducerName: NameSpace.USER}
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_DATA,
          payload: {login: `jondoe@mail.com`, userAvatar: `avatar.jpg`}
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.CHANGE_FETCH_STATUS,
          payload: {status: FetchStatus.DONE, reducerName: NameSpace.USER}
        });
        expect(dispatch).toHaveBeenNthCalledWith(5, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.MAIN_SCREEN
        });
      });
  });

  it(`Should make a correct call to /logout`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logoutFromSite();

    apiMock
      .onGet(ApiRoute.LOGOUT)
      .reply(200, []);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT,
          payload: AuthorizationStatus.NO_AUTH
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_USER_DATA,
          payload: {login: ``, userAvatar: ``}
        });
      });
  });
});
