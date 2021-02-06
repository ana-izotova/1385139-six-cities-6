import React from "react";
import MainPage from "../main-page/main-page";
import {OfferCards} from "../../types";

const App: React.FC<OfferCards> = (props) => {
  const {cards} = props;

  return (
    <MainPage
      cards = {cards}
    />
  );
}

export default App;
