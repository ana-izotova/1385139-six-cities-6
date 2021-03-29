import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {TestMock} from "../../test-mocks/test-mock";
import CityTab from "./city-tab";
import {Cities} from "../../const";
import * as redux from "react-redux";
import {ActionType} from "../../store/action-types";

test(`A click on city tab should fire correct action`, () => {
  const useDispatchSpy = jest.spyOn(redux, `useDispatch`);
  const mockDispatchFn = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatchFn);

  render(
      <TestMock authorized={true} emptyStore={false}>
        <CityTab city={Cities[1]}/>
      </TestMock>
  );

  const tabButton = screen.getByRole(`link`, {name: Cities[1].name});
  userEvent.click(tabButton);
  expect(mockDispatchFn).toBeCalledWith({
    type: ActionType.CHANGE_CITY,
    payload: Cities[1]
  });
});
