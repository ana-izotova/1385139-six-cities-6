import React from "react";
import {connect} from 'react-redux';
import {AuthorizationStatus} from "../../const";
import {PrivateRouteProps} from "./private-route-types";
import {StateTypes} from "../../store/store-types";
import LoaderScreensaver from "../loader-screensaver/loader-screensaver";

const PrivateRoute: React.FC<PrivateRouteProps> = ({authorizationStatus, isDataLoaded, renderComponent, redirect}) => {
  if (!isDataLoaded) {
    return <LoaderScreensaver />;
  }
  return (
    authorizationStatus === AuthorizationStatus.AUTH
      ? renderComponent()
      : redirect()
  );
};

const mapStateToProps = ({authorizationStatus, isDataLoaded}: StateTypes) => ({
  authorizationStatus,
  isDataLoaded
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
