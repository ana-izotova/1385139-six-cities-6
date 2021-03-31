import React from "react";
import {CityTabProps} from "./city-tab-types";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/root-reducer";
import {changeCity} from "../../store/actions";

const CityTab: React.FC<CityTabProps> = ({city}) => {
  const {currentCity} = useSelector(
      (state: RootStateType) => state.ALL_OFFERS
  );
  const isCurrentCity: boolean = city.name === currentCity.name;
  const dispatch = useDispatch();
  const handleCityTabClick = () => dispatch(changeCity(city));

  return (
    <li className="locations__item">
      <a href="#"
        className={`locations__item-link tabs__item ${
          isCurrentCity ? `tabs__item--active` : ``
        }`}
        onClick={handleCityTabClick}
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
};

export default React.memo(CityTab);
