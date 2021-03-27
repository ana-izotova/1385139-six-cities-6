import React from "react";
import {Link} from "react-router-dom";
import Header from "../header/header";
import {HttpCode} from "../../const";

interface ErrorScreenProps {
  errorCode: number
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({errorCode}) => {
  let errorMessage;

  switch (errorCode) {
    case (HttpCode.NOT_FOUND):
      errorMessage = `Error ${errorCode}. Page not found.`;
      break;
    default:
      errorMessage = `Error ${errorCode}. Please, try again later.`;
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main style={{marginLeft: `auto`, marginRight: `auto`, width: `20%`}}>
        <h1>{errorMessage}</h1>
        <Link to="/" style={{textDecoration: `underline`}}>
          Back to main page
        </Link>
      </main>
    </div>
  );
};

export default ErrorScreen;
