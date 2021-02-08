import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";

fetch(`https://6.react.pages.academy/six-cities/hotels`)
  .then((response) => response.json())
  .then((response) => {
    const cards = response;

    ReactDom.render(
        React.createElement(App, {cards}),
        document.querySelector(`#root`)
    );
  });
