import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";
import {OfferCard} from "./types";

fetch(`https://6.react.pages.academy/six-cities/hotels`)
  .then((response) => response.json())
  .then((response) => {
    const cards = response.map((card) => <OfferCard>{
      ...card,
      isFavorite: card.is_favorite,
      isPremium: card.is_premium,
      maxAdults: card.max_adults,
      host: {
        ...card.host,
        avatarUrl: card.host.avatar_url,
        isPro: card.host.is_pro,
      },
    });

    ReactDom.render(
        React.createElement(App, {cards}),
        document.querySelector(`#root`)
    );
  });
