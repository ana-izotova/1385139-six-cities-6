import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";

const OFFERS_PER_PAGE = 5;

fetch(`https://6.react.pages.academy/six-cities/hotels`)
  .then((response) => response.json())
  .then((response) => {
    const offers = response.slice(0, OFFERS_PER_PAGE);
    ReactDom.render(
      React.createElement(App, offers),
      document.querySelector(`#root`)
    )
  });
