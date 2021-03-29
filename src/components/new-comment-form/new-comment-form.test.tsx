import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import NewCommentForm from "./new-comment-form";
import {TestMock} from "../../test-mocks/test-mock";
import {sendComment} from "../../store/api-actions";
import userEvent from "@testing-library/user-event";

jest.mock(`../../store/api-actions`);

test(`Send new comment logic works correctly`, async () => {
  render(
      <TestMock emptyStore={false} authorized={true}>
        <NewCommentForm offerId={1} />
      </TestMock>
  );

  const commentText = `Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.`;

  const commentInput = screen.getByRole(`textbox`);
  const ratingInput5Stars = screen.getByTestId(/5-stars/i);
  const submitButton = screen.getByRole(`button`, {name: /Submit/i});
  expect(submitButton).toBeDisabled();

  expect(screen.getByLabelText(/Your review/i)).toBeInTheDocument();

  userEvent.click(ratingInput5Stars);
  expect(ratingInput5Stars).toBeChecked();

  fireEvent.input(commentInput, {
    target: {value: commentText}
  });

  expect(commentInput).toHaveValue(commentText);

  expect(submitButton).not.toBeDisabled();
  userEvent.click(submitButton);
  expect(sendComment).toBeCalledWith(1, {comment: commentText, rating: 5});
});
