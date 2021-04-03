import React from 'react';
import {render, screen} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import NewCommentRatingInput from "./new-comment-rating-input";
import {FetchStatus} from "../../const";
import userEvent from "@testing-library/user-event";

describe(`New comment rating input component should work correctly`, () => {
  it(`5 star rating input should be checked`, () => {
    const onRatingChange = jest.fn();
    render(
        <TestMock authorized={true} emptyStore={false}>
          <NewCommentRatingInput handleRatingChange={onRatingChange} rating={5} fetchStatus={FetchStatus.DONE}/>
        </TestMock>
    );

    const ratingInput5Stars = screen.getByTestId(/5-stars/i);
    expect(ratingInput5Stars).toBeChecked();
  });

  it(`Click on rating input should fire a callback for rating change`, () => {
    const onRatingChange = jest.fn();
    render(
        <TestMock authorized={true} emptyStore={false}>
          <NewCommentRatingInput handleRatingChange={onRatingChange} rating={null} fetchStatus={FetchStatus.DONE}/>
        </TestMock>
    );

    const ratingInputs = screen.getAllByRole(`radio`);
    ratingInputs.forEach((input) => {
      expect(input).not.toBeDisabled();
      expect(input).not.toBeChecked();
    });

    const ratingInput5Stars = screen.getByTestId(/5-stars/i);
    userEvent.click(ratingInput5Stars);
    expect(onRatingChange).toBeCalled();
  });

  it(`Rating inputs should be disabled when fetch status is pending`, () => {
    const onRatingChange = jest.fn();

    render(
        <TestMock authorized={true} emptyStore={false}>
          <NewCommentRatingInput handleRatingChange={onRatingChange} rating={1} fetchStatus={FetchStatus.PENDING}/>
        </TestMock>
    );

    const ratingInputs = screen.getAllByRole(`radio`);
    ratingInputs.forEach((input) => {
      expect(input).toBeDisabled();
    });

    const ratingInput5Stars = screen.getByTestId(/5-stars/i);
    userEvent.click(ratingInput5Stars);
    expect(onRatingChange).not.toBeCalled();
  });
});
