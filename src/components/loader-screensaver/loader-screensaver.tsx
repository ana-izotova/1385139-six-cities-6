import React from "react";
import Header from "../header/header";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import {BLUE_COLOR} from "../../const";

const LoaderScreensaver: React.FC = () => {
  const FallbackContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main style={{marginLeft: `auto`, marginRight: `auto`, width: `20%`}}>
        <h1>Loading, please wait...</h1>
        <FallbackContainer>
          <Loader type="TailSpin" color={BLUE_COLOR} height={80} width={80} />
        </FallbackContainer>
      </main>
    </div>
  );
};

export default LoaderScreensaver;
