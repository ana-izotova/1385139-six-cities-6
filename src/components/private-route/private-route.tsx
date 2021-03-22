import React from "react";
import {useSelector} from 'react-redux';
import {AuthorizationStatus} from "../../const";
import {PrivateRouteProps} from "./private-route-types";
import LoaderScreensaver from "../loader-screensaver/loader-screensaver";
import {RootStateType} from "../../store/root-reducer";

const PrivateRoute: React.FC<PrivateRouteProps> = ({renderComponent, redirect}) => {
  const {authorizationStatus} = useSelector((state: RootStateType) => state.USER);
  const {isDataLoaded} = useSelector((state: RootStateType) => state.ALL_OFFERS);

  if (!isDataLoaded) {
    return <LoaderScreensaver />;
  }
  return (
    authorizationStatus === AuthorizationStatus.AUTH
      ? renderComponent()
      : redirect()
  );
};

export default PrivateRoute;
