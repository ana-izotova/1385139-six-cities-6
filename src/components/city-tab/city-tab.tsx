import React from "react";
import {CityTabProps} from "./city-tab-types";
import {ActionCreator} from "../../store/action";
import {StateTypes} from "../../store/store-types";
import {Dispatch} from "redux";
import {connect} from "react-redux";

const CityTab: React.FC<CityTabProps> = ({currentCity, onUserClick, city}) => {
  const isCurrentCity: boolean = city === currentCity;

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isCurrentCity ? `tabs__item--active` : ``}`} onClick={() => onUserClick(city)}>
        <span>{city}</span>
      </a>
    </li>
  );
};

const mapStateToProps = (state: StateTypes) => ({
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onUserClick(city: string) {
    dispatch(ActionCreator.changeCity(city));
  },
});

export {CityTab};
export default connect(mapStateToProps, mapDispatchToProps)(CityTab);
