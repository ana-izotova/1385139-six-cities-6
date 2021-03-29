import React from 'react';
import configureStore from "redux-mock-store";
import * as redux from 'react-redux';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {HttpCode, AppRoute} from '../../const';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import RoomScreen from "../room-screen/room-screen";
import thunk from 'redux-thunk';
import ErrorScreen from "../error-screen/error-screen";
import {nonEmptyMockStoreUnauthorized, nonEmptyMockStoreAuthorized} from "../../test-mocks/non-empty-mock-store";
import MainScreen from "../main-screen/main-screen";
import {emptyMockStoreAuthorized} from "../../test-mocks/empty-mock-store";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock(`../../store/api-actions`, () => {
  return {
    fetchOffersData: jest.fn().mockImplementation(() => {
      return {
        type: `test`,
        payload: []
      };
    }),
    fetchFavoriteCards: jest.fn().mockImplementation(() => {
      return {
        type: `test`,
        payload: []
      };
    }),
    fetchSingleOffersData: jest.fn().mockImplementation(() => {
      return {
        type: `test`,
        payload: {}
      };
    }),
    fetchOfferComments: jest.fn().mockImplementation(() => {
      return {
        type: `test`,
        payload: []
      };
    }),
    fetchOffersNearby: jest.fn().mockImplementation(() => {
      return {
        type: `test`,
        payload: []
      };
    }),
  };
});

describe(`Test routing`, () => {
  const history = createMemoryHistory();
  jest.spyOn(redux, `useDispatch`);
  jest.spyOn(redux, `useSelector`);
  it(`Render Main screen when user navigate to '/' url`, () => {
    history.push(AppRoute.MAIN_SCREEN);
    render(
        <redux.Provider store={mockStore(nonEmptyMockStoreUnauthorized)}>
          <Router history={history}>
            <MainScreen />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(`Cities`)).toBeInTheDocument();
  });
  it(`Render login screen correctly when user navigate to '/login'`, () => {
    history.push(AppRoute.LOGIN_SCREEN);
    render(
        <redux.Provider store={mockStore(nonEmptyMockStoreUnauthorized)}>
          <Router history={history}>
            <LoginScreen />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();
  });

  it(`Render Favorites screen correctly when user navigate to '/favorite'`, () => {
    history.push(AppRoute.FAVORITES_SCREEN);

    render(
        <redux.Provider store={mockStore(emptyMockStoreAuthorized)}>
          <Router history={history}>
            <FavoritesScreen />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips./i)).toBeInTheDocument();
  });

  it(`Render room screen correctly when user navigate to '/offer:id'`, () => {
    history.push(`${AppRoute.OFFER_SCREEN}/1`);
    render(
        <redux.Provider store={mockStore(nonEmptyMockStoreAuthorized)}>
          <Router history={history}>
            <RoomScreen cardId={1}/>
          </Router>
        </redux.Provider>
    );

    const link = screen.getByRole(`link`, {name: `The house among olive`});
    expect(link).toBeInTheDocument();
  });

  it(`Render error correctly when user navigate to nonexistent page`, () => {
    history.push(`/wrong-route`);
    render(
        <redux.Provider store={mockStore(nonEmptyMockStoreUnauthorized)}>
          <Router history={history}>
            <ErrorScreen errorCode={HttpCode.NOT_FOUND} />
          </Router>
        </redux.Provider>
    );
    expect(screen.getByText(`Error 404. Page not found.`)).toBeInTheDocument();
  });
});
