import {createReducer} from "@reduxjs/toolkit";
import {logout, requireAuthorization, setUserData} from "../actions";
import {AuthorizationStatus} from "../../const";
import {userInitialStateTypes} from "./user-types";

const initialState: userInitialStateTypes = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  login: ``,
  userAvatar: ``
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
});
