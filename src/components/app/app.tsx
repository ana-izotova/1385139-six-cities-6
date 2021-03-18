import React, {useEffect} from "react";
import MainScreen from "../main-screen/main-screen";
import {
  Switch,
  Route,
  Router as BrowserRouter,
  Redirect,
} from "react-router-dom";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import LoginScreen from "../login-screen/login-screen";
import RoomScreen from "../room-screen/room-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import PrivateRoute from "../private-route/private-route";
import {Props} from "./app-types";
import {AppRoute} from "../../const";
import browserHistory from "../../browser-history";
import {useDispatch} from "react-redux";
import {checkAuth, fetchOffersData} from "../../store/api-actions";

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
    dispatch(fetchOffersData());
  });

  return (
    <BrowserRouter history={browserHistory}>
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
          path={AppRoute.OFFER_SCREEN}
          render={({match}: Props) => <RoomScreen cardId={Number(match.params.id)} />}
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
