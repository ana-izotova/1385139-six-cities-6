import React from "react";
import MainScreen from "../main-screen/main-screen";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import LoginScreen from "../login-screen/login-screen";
import RoomScreen from "../room-screen/room-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import {Props} from "./app-types";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen />
        </Route>
        <Route
          exact
          path="/offer/:id"
          render={({match}: Props) => (
            <RoomScreen id={match.params.id} />
          )}
        />
        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
