import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";

const offersQuantity = 5;

fetch(`https://6.react.pages.academy/six-cities/hotels`)
  .then((response) => response.json())
  .then((response) => {
    const offers = response.slice(0, 5);
    console.log(offers)
    ReactDom.render(
      React.createElement(App, offers),
      document.querySelector(`#root`)
    )
  });
