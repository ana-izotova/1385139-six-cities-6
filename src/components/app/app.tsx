import React, {useEffect} from "react";
import MainScreen from "../main-screen/main-screen";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import LoginScreen from "../login-screen/login-screen";
import RoomScreen from "../room-screen/room-screen";
import PrivateRoute from "../private-route/private-route";
import {Props} from "./app-types";
import {AppRoute, HttpCode} from "../../const";
import {useDispatch} from "react-redux";
import {checkAuth, fetchOffersData} from "../../store/api-actions";
import ErrorScreen from "../error-screen/error-screen";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(fetchOffersData());
  });

  return (
    <Switch>
      <Route exact path={AppRoute.MAIN_SCREEN}>
        <MainScreen />
      </Route>
      <Route path={AppRoute.LOGIN_SCREEN}>
        <LoginScreen />
      </Route>
      <PrivateRoute path={AppRoute.FAVORITES_SCREEN}
        renderComponent={() => <FavoritesScreen />}
        redirect={() => <Redirect to={AppRoute.LOGIN_SCREEN} />}
      />
      <Route
        exact
        path={AppRoute.OFFER_SCREEN}
        render={({match}: Props) => <RoomScreen cardId={Number(match.params.id)} />}
      />
      <Route>
        <ErrorScreen errorCode={HttpCode.NOT_FOUND}/>
      </Route>
    </Switch>
  );
};

export default App;
