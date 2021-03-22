import {createReducer} from "@reduxjs/toolkit";
import {SingleOfferInitialStateTypes} from "./single-offer-types";
import {loadComments, loadOffersNearby, loadSingleOffer, clearSingleOffersData, changeFetchStatus} from "../actions";
import {FetchStatus} from "../../const";
import {NameSpace} from "../root-reducer";

const initialState: SingleOfferInitialStateTypes = {
  offer: null,
  offersNearby: [],
  comments: [],
  isOfferLoaded: false,
  fetchStatus: FetchStatus.PENDING
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
    state.comments = action.payload;
  });
  builder.addCase(clearSingleOffersData, (state, action) => {
    state.offer = action.payload.offer;
    state.offersNearby = action.payload.offersNearby;
    state.comments = action.payload.comments;
    state.isOfferLoaded = action.payload.isOfferLoaded;
  });
  builder.addCase(changeFetchStatus, (state, action) => {
    if (action.payload.reducerName === NameSpace.SINGLE_OFFER) {
      state.fetchStatus = action.payload.status;
    }
  });
});
