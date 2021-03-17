import React from "react";
import {Link} from "react-router-dom";
import {HeaderProps} from "./header-types";
import HeaderNav from "../header-nav/header-nav";
import {AppRoute} from "../../const";

const Header: React.FC<HeaderProps> = ({isMainScreen = false}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className={`header__logo-link ${isMainScreen ? `header__logo-link--active` : ``}`} to={AppRoute.MAIN_SCREEN}>
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                style={{width: 81, height: 41}}
              />
            </Link>
          </div>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
