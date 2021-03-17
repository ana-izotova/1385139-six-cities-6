import React from "react";
import ReactDom from "react-dom";
import {configureStore} from "@reduxjs/toolkit";
import {createAPI} from "./services/api";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {rootReducer} from "./store/root-reducer";
import {checkAuth, fetchOffersData} from "./store/api-actions";
import {AuthorizationStatus} from "./const";
import {redirect} from "./middlewares/redirect";
import {requireAuthorization} from "./store/action";

const api = createAPI(
    () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      },
    }).concat(redirect)
});

store.dispatch(checkAuth());
store.dispatch(fetchOffersData());

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
