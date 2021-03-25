import React from 'react';
import configureStore from 'redux-mock-store';
import {nonEmptyMockStore} from "./non-empty-mock-store";
import * as redux from 'react-redux';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {RootStateType} from "../store/root-reducer";
import {ActionTypes} from "../store/action-types";
import {redirect} from "../middlewares/redirect";
import {emptyMockStore} from "./empty-mock-store";

interface TestProps {
  children?: any,
  pushUrl?: string,
  emptyStore?: boolean
}

export const TestMock: React.FC<TestProps> = ({children, pushUrl, emptyStore = false}) => {
  jest.spyOn(redux, `useDispatch`);
  jest.spyOn(redux, `useSelector`);
  const mockStore = configureStore<RootStateType, ThunkDispatch<RootStateType, any, ActionTypes>>([thunk, redirect]);
  const store = emptyStore ? mockStore(emptyMockStore) : mockStore(nonEmptyMockStore);
  const history = createMemoryHistory();

  if (pushUrl) {
    history.push(pushUrl);
  }

  store.dispatch = () => {};

  return (
    <redux.Provider store={store}>
      <Router history={history}>
        {children}
      </Router>
    </redux.Provider>
  );
};


