import {createReducer} from "@reduxjs/toolkit";
import {SingleOfferInitialStateTypes} from "./single-offer-types";
import {loadComments, loadOffersNearby, loadSingleOffer, clearSingleOffersData, changeFetchStatus} from "../actions";
import {FetchStatus, NameSpace} from "../../const";
import {sortByDate} from "../../utils/sorting";

export const initialState: SingleOfferInitialStateTypes = {
  offer: null,
  offersNearby: [],
  comments: [],
  isOfferLoaded: false,
  fetchStatus: FetchStatus.INIT
};

export const singleOffer = createReducer(initialState, (builder) => {
  builder.addCase(loadSingleOffer, (state, action) => {
    state.offer = action.payload;
    state.isOfferLoaded = true;
  });
  builder.addCase(loadOffersNearby, (state, action) => {
    state.offersNearby = action.payload;
  });
  builder.addCase(loadComments, (state, action) => {
    state.comments = action.payload.sort(sortByDate);
  });
  builder.addCase(clearSingleOffersData, (state) => {
    state.offer = null;
    state.offersNearby = [];
    state.comments = [];
    state.isOfferLoaded = false;
    state.fetchStatus = FetchStatus.INIT;
  });
  builder.addCase(changeFetchStatus, (state, action) => {
    if (action.payload.reducerName === NameSpace.SINGLE_OFFER) {
      state.fetchStatus = action.payload.status;
    }
  });
});
