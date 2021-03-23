import {user} from "./user";
import {ActionType} from "../action-types";

describe(`User's reducers should work correctly`, () => {
  it(`Reducer should change authorization status correctly`, () => {
    const initialState = {
      authorizationStatus: `NO_AUTH`
    };

    const getRequireAuthorizationAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: `AUTH`
    };

    const expectedState = {
      authorizationStatus: `AUTH`
    };

    expect(user(initialState, getRequireAuthorizationAction)).toEqual(expectedState);
  });

  it(`Reducer should set user's data correctly`, () => {
    const initialState = {
      login: ``,
      userAvatar: ``
    };

    const getSetUserDataAction = {
      type: ActionType.SET_USER_DATA,
      payload: {
        login: `johndoe@mail.com`,
        userAvatar: `johndoe.jpg`
      }
    };

    const expectedState = {
      login: `johndoe@mail.com`,
      userAvatar: `johndoe.jpg`
    };

    expect(user(initialState, getSetUserDataAction)).toEqual(expectedState);
  });

  it(`Reducer should change authorization status correctly to unauthorized`, () => {
    const initialState = {
      authorizationStatus: `AUTH`
    };

    const getLogoutAction = {
      type: ActionType.LOGOUT,
      payload: `NO_AUTH`
    };

    const expectedState = {
      authorizationStatus: `NO_AUTH`
    };

    expect(user(initialState, getLogoutAction)).toEqual(expectedState);
  })
});
