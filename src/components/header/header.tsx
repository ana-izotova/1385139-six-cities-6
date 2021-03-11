import React from "react";
import {Link} from "react-router-dom";
import {StateTypes} from "../../store/store-types";
import {connect} from "react-redux";
import {HeaderProps} from "./header-types";
import {AuthorizationStatus} from "../../const";

const Header: React.FC<HeaderProps> = ({authorizationStatus, userAvatar, login}) => {
  const loggedIn: boolean = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link header__logo-link--active" to="/">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                style={{width: 81, height: 41}}
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  className="header__nav-link header__nav-link--profile"
                  to={loggedIn ? `/favorites` : `/login`}
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  <span className="header__user-name user__name">
                    {loggedIn ? `${login}` : <span className="header__login">Sign in</span>}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ({authorizationStatus, userAvatar, login}: StateTypes) => ({
  authorizationStatus,
  userAvatar,
  login
});

export {Header};
export default connect(mapStateToProps)(Header);
