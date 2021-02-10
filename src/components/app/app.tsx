import React from "react";
import Main from "../main/main";
import {
  Switch,
  Route,
  BrowserRouter,
  RouteComponentProps,
} from "react-router-dom";
import {OfferCards} from "../../types";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import Offer from "../offer/offer";
import NotFound from "../not-found/not-found";

const OFFERS_PER_PAGE = 5;

interface MatchParams {
  id: string;
}

type Props = RouteComponentProps<MatchParams>

const App: React.FC<OfferCards> = (props) => {
  const {cards} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main cards={cards.slice(0, OFFERS_PER_PAGE)} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/favorites">
          <Favorites cards={cards} />
        </Route>
        <Route
          exact
          path="/offer/:id"
          render={({match}: Props) => (
            <Offer cards={cards} id={match.params.id} />
          )}
        />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
