import {Link} from "react-router-dom";
import React from "react";
import {AppRoute} from "../../const";

const Footer: React.FC = () => {
  return (
    <footer className="footer container">
      <Link className="footer__logo-link" to={AppRoute.MAIN_SCREEN}>
        <img
          className="footer__logo"
          src="img/logo.svg"
          alt="6 cities logo"
          width="64"
          height="33"
        />
      </Link>
    </footer>
  );
};

export default React.memo(Footer);
