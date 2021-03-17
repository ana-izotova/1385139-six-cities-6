import React from "react";
import CityOffers from "../city-offers/city-offers";
import CitiesList from "../cities-list/cities-list";
import Header from "../header/header";
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/root-reducer";

const MainScreen: React.FC = () => {
  const {filteredCards} = useSelector((state: RootStateType) => state.ALL_OFFERS);

  return (
    <div className="page page--gray page--main">
      <Header isMainScreen={true}/>

      <main className={`page__main page__main--index ${filteredCards.length === 0 ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList />
        <CityOffers />
      </main>
    </div>
  );
};

export default MainScreen;
