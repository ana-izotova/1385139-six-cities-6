import React from "react";
import Header from "../header/header";

const LoaderScreensaver: React.FC = () => {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main style={{marginLeft: `auto`, marginRight: `auto`, width: `20%`}}>
        <h1>Loading, please wait...</h1>
      </main>
    </div>
  );
};

export default LoaderScreensaver;
