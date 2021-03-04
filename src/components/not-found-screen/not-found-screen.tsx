import React from "react";
import {Link} from "react-router-dom";
import Header from "../header/header";

const NotFoundScreen: React.FC = () => {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main style={{marginLeft: `auto`, marginRight: `auto`, width: `20%`}}>
        <h1>404. Page not found</h1>
        <Link to="/" style={{textDecoration: `underline`}}>Вернуться на главную</Link>
      </main>
    </div>
  );
};

export default NotFoundScreen;
