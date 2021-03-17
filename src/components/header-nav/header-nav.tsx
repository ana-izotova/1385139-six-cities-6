import {Link} from "react-router-dom";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/root-reducer";
import {AuthorizationStatus, AppRoute} from "../../const";
import {logoutFromSite} from "../../store/api-actions";

const HeaderNav: React.FC = () => {
  const {authorizationStatus, login, userAvatar} = useSelector((state: RootStateType) => state.USER);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutFromSite());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.NO_AUTH ?
          <li className="header__nav-item user">
            <Link className="header__nav-link header__nav-link--profile" href="#" to={AppRoute.LOGIN_SCREEN}>
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">Sign in</span>
            </Link>
          </li> :
          <>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" href="#" to={AppRoute.FAVORITES_SCREEN}>
                <div className="header__avatar-wrapper user__avatar-wrapper"
                  style={{
                    backgroundImage: `url(${userAvatar})`,
                    borderRadius: `50%`
                  }}
                >
                </div>
                <span className="header__user-name user__name">{login}</span>
              </Link>
            </li>
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" style={{
                marginLeft: `10px`
              }} href="#" to="/" onClick={handleLogout}>
                <span className="header__user-name user__name">Выход</span>
              </Link>
            </li>
          </>
        }
      </ul>
    </nav>
  );
};

export default HeaderNav;
