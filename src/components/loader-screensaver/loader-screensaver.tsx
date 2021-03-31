import React from "react";
import Header from "../header/header";
import Loader from "react-loader-spinner";
import {BLUE_COLOR} from "../../const";
import "./loader-screensaver.css";

const LoaderScreensaver: React.FC = () => {

  return (
    <div className="page page--gray page--main">
      <Header />
      <main style={{marginLeft: `auto`, marginRight: `auto`, width: `20%`}}>
        <h1>Loading, please wait...</h1>
        <div className="loader-container">
          <Loader type="TailSpin" color={BLUE_COLOR} height={80} width={80} />
        </div>
      </main>
    </div>
  );
};

export default LoaderScreensaver;
