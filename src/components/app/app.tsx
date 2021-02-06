import React from "react";
import MainPage from "../main-page/main-page";
import {OfferCards} from "../../offer-cards-interface";

const App = (cards: OfferCards) => {
  return (
    <MainPage
      {...cards}
    />
  );
}

export default App;
