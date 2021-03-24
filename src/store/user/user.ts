import {createReducer} from "@reduxjs/toolkit";
import {changeFetchStatus, logout, requireAuthorization, setUserData} from "../actions";
import {AuthorizationStatus, FetchStatus} from "../../const";
import {userInitialStateTypes} from "./user-types";
import {NameSpace} from "../root-reducer";

const initialState: userInitialStateTypes = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: ``,
  userAvatar: ``,
  fetchStatus: FetchStatus.PENDING
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
