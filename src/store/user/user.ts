import {createReducer} from "@reduxjs/toolkit";
import {changeFetchStatus, logout, requireAuthorization, setUserData} from "../actions";
import {AuthorizationStatus, FetchStatus} from "../../const";
import {UserInitialStateTypes} from "./user-types";
import {NameSpace} from "../../const";

const initialState: UserInitialStateTypes = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: ``,
  userAvatar: ``,
  fetchStatus: FetchStatus.INIT
};

export const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setUserData, (state, action) => {
    state.login = action.payload.login;
    state.userAvatar = action.payload.userAvatar;
  });
  builder.addCase(logout, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(changeFetchStatus, (state, action) => {
    if (action.payload.reducerName === NameSpace.USER) {
      state.fetchStatus = action.payload.status;
    }
  });
});
