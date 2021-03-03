import React from "react";
import {CityTabProps} from "./city-tab-types";
import {ActionCreator} from "../../store/action";
import {StateTypes} from "../../store/store-types";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {City} from "../../types";

const CityTab: React.FC<CityTabProps> = ({currentCity, onUserClick, city}) => {
  const isCurrentCity: boolean = city.name === currentCity.name;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isCurrentCity ? `tabs__item--active` : ``}`} onClick={() => onUserClick(city)}>
        <span>{city.name}</span>
      </a>
    </li>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onUserClick(city: City) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CityTab};
export default connect(mapStateToProps, mapDispatchToProps)(CityTab);
