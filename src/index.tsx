import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import App from "./components/app/app";
import {reducer} from "./store/reducer";

const store = createStore(reducer, composeWithDevTools());

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
