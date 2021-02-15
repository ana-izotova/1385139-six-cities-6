import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";
import {adaptToClient} from "./utils";
import {OfferCard} from "./types";

const CARDS_PER_PAGE = 5;

const renderApp = (cards: Array<OfferCard>) => {
  ReactDom.render(
      React.createElement(App, {cards}),
      document.querySelector(`#root`)
  );
};

const getDataFromServer = async () => {
  const cards = await fetch(`https://6.react.pages.academy/six-cities/hotels`)
    .then((response) => response.json())
    .then((response: Array<unknown>) => {
      return response.slice(0, CARDS_PER_PAGE);
    });

  await Promise.all(
      cards.map(async (card) => {
        const id = card.id;
        return await fetch(
            `https://6.react.pages.academy/six-cities/comments/${id}`
        )
          .then((response) => response.json())
          .then((comments: Array<unknown>) => adaptToClient(card, comments));
      }))
    .then((result) => renderApp(result));
};

getDataFromServer();
