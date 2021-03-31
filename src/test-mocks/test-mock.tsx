import React, {Dispatch} from 'react';
import configureStore from 'redux-mock-store';
import * as redux from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {RootStateType} from "../store/root-reducer";
import {ActionTypes} from "../store/action-types";
import {redirect} from "../store/middlewares/redirect";
import {emptyMockStoreAuthorized, emptyMockStoreUnauthorized} from "./empty-mock-store";
import {nonEmptyMockStoreUnauthorized, nonEmptyMockStoreAuthorized} from "./non-empty-mock-store";
import {AppThunk} from "../store/api-actions";

interface TestProps {
  children?: any,
  pushUrl?: string,
  emptyStore: boolean,
  authorized: boolean
}

export const TestMock: React.FC<TestProps> = ({children, pushUrl, emptyStore, authorized}) => {
  jest.spyOn(redux, `useDispatch`);
  jest.spyOn(redux, `useSelector`);

  const mockStore = configureStore<RootStateType, ThunkDispatch<RootStateType, AppThunk, ActionTypes>>([thunk, redirect]);

  let mock;
  if (emptyStore) {
    mock = authorized ? emptyMockStoreAuthorized : emptyMockStoreUnauthorized;
  } else {
    mock = authorized ? nonEmptyMockStoreAuthorized : nonEmptyMockStoreUnauthorized;
  }

  const store = mockStore(mock);
  const history = createMemoryHistory();

  if (pushUrl) {
    history.push(pushUrl);
  }

  return (
    <redux.Provider store={store}>
      <Router history={history}>
        {children}
      </Router>
    </redux.Provider>
  );
};


