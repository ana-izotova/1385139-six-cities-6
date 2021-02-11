import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";
import {adaptToClient} from "./utils";

const renderApp = (data) => {
  ReactDom.render(
      React.createElement(App, {data}),
      document.querySelector(`#root`)
  );
};

const getDataFromServer = async () => {
  const cards = await fetch(`https://6.react.pages.academy/six-cities/hotels`)
    .then((response) => response.json())
    .then((response: Array<unknown>) => {
      return response;
    });

  const adaptedCards = await Promise.all(
      cards.map(async (card) => {
        const id = card.id;
        const adaptedCard = await fetch(
            `https://6.react.pages.academy/six-cities/comments/${id}`
        )
        .then((response) => response.json())
        .then((comments: Array<unknown>) => adaptToClient(card, comments))
        .then((response) => {
          return response;
        });

        return adaptedCard;
      })
  );

  renderApp(adaptedCards);
};

getDataFromServer();
