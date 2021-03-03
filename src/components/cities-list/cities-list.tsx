import React from "react";
import CityTab from "../city-tab/city-tab";
import {Cities} from "../../const";

const CitiesList: React.FC = () => {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Cities.map((city) => <CityTab city={city} key={city.name}/>)}
        </ul>
      </section>
    </div>
  );
};

export default CitiesList;
