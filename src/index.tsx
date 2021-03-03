import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {createAPI} from "./services/api";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./components/app/app";
import {reducer} from "./store/reducer";
import {ActionCreator} from "./store/action";
import {checkAuth, fetchOffersData} from "./store/api-actions";
import {AuthorizationStatus} from "./const";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    ));

// store.dispatch(checkAuth());
store.dispatch(fetchOffersData());

ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);

// const getDataFromServer = async () => {
//   const cards = await fetch(`https://6.react.pages.academy/six-cities/hotels`)
//     .then((response) => response.json())
//     .then((response: Array<unknown>) => {
//       return response
//         .filter((card) => card.city.name === `Amsterdam`)
//         .slice(0, CARDS_PER_PAGE);
//     });
//
//   await Promise.all(
//     cards.map(async (card) => {
//       const id = card.id;
//       return await fetch(
//         `https://6.react.pages.academy/six-cities/comments/${id}`
//       )
//         .then((response) => response.json())
//         .then((comments: Array<unknown>) => adaptToClient(card, comments));
//     })
//   ).then((result) => renderApp(result));
// };
//
// getDataFromServer();
