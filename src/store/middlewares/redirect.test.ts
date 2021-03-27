import {redirect} from './redirect';
import {redirectToRoute} from "../actions";
import {ActionTypes} from "../action-types";

const mockRedux = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };

  const next = jest.fn();
  const invoke = (action: ActionTypes) => redirect(store)(next)(action);
  return {store, next, invoke};
};

const fakeHistory = {
  location: {pathname: ``},
  push(path: string) {
    this.location.pathname = path;
  }
};

jest.mock(`../../browser-history`, () => fakeHistory);

describe(`Custom middleware works correctly`, () => {
  it(`Action passes to next middleware`, () => {
    const {invoke, next} = mockRedux();
    const action = redirectToRoute(`/`);
    invoke(action);
    expect(next).toHaveBeenCalledWith(action);
  });

  it(`Redirect route should be added to fakeHistory`, () => {
    const {invoke} = mockRedux();
    invoke(redirectToRoute(`/login`));
    expect(fakeHistory.location.pathname).toBe(`/login`);

    invoke(redirectToRoute(`/lose`));
    expect(fakeHistory.location.pathname).toBe(`/lose`);
  });

  it(`Non redirect because bad action`, () => {
    const url = `/test-url`;
    const {invoke} = mockRedux();
    invoke({type: `TEST_ACTION`, payload: url});
    expect(fakeHistory.location.pathname).not.toBe(url);
  });
});
