import React from 'react';
import {render, screen} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import Sorting from "./sorting";
import * as redux from "react-redux";
import userEvent from "@testing-library/user-event";
import {SortType} from "../../const";
import {ActionType} from "../../store/action-types";

test(`Should change sorting type on click`, () => {
  const useDispatchSpy = jest.spyOn(redux, `useDispatch`);
  const mockDispatchFn = jest.fn();
  useDispatchSpy.mockReturnValue(mockDispatchFn);

  render(
      <TestMock authorized={true} emptyStore={false}>
        <Sorting />
      </TestMock>
  );

  const sortingList = screen.getByRole(`list`);
  const sortingTypeByRating = screen.getByText(SortType.TOP_RATED_FIRST);

  userEvent.click(sortingList);
  userEvent.click(sortingTypeByRating);

  expect(mockDispatchFn).toBeCalledWith({
    type: ActionType.CHANGE_SORT,
    payload: SortType.TOP_RATED_FIRST
  });
});
