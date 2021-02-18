import React from "react";
import MainScreen from "../main-screen/main-screen";
import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import {OfferCards} from "../../types";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import LoginScreen from "../login-screen/login-screen";
import RoomScreen from "../room-screen/room-screen";
import NotFoundScreen from "../not-found-screen/not-found-screen";
import {Props} from "./app-types";

const OFFERS_PER_PAGE = 5;

const App: React.FC<OfferCards> = (props) => {
  const {cards} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen cards={cards.slice(0, OFFERS_PER_PAGE)} />
        </Route>
        <Route exact path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen cards={cards} />
        </Route>
        <Route
          exact
          path="/offer/:id"
          render={({match}: Props) => (
            <RoomScreen cards={cards} id={match.params.id} />
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
