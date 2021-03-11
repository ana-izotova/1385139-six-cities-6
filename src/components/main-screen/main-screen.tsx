import React from "react";
import CityOffers from "../city-offers/city-offers";
import CitiesList from "../cities-list/cities-list";
import Header from "../header/header";

const MainScreen: React.FC = () => {
  return (
    <div className="page page--gray page--main">
      <Header/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <CityOffers />
      </main>
    </div>
  );
};

export default MainScreen;
