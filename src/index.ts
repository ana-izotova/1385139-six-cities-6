import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";
import {OfferCard} from "./types";
import {adaptToClient} from "./utils";

fetch(`https://6.react.pages.academy/six-cities/hotels`)
  .then((response) => response.json())
  .then((response) => {
    const cards = response.map((card) => adaptToClient(card));

    ReactDom.render(
        React.createElement(App, {cards}),
        document.querySelector(`#root`)
    );
  });
