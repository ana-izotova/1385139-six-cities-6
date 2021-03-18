import React from "react";
import ReactDom from "react-dom";
import {configureStore} from "@reduxjs/toolkit";
import {createAPI} from "./services/api";
import {Provider} from "react-redux";
import App from "./components/app/app";
import {rootReducer} from "./store/root-reducer";
import {AuthorizationStatus} from "./const";
import {redirect} from "./middlewares/redirect";
import {requireAuthorization} from "./store/actions";

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

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
