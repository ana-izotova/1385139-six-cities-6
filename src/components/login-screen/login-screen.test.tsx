import React from 'react';
import {render, screen} from '@testing-library/react';
import LoginScreen from "./login-screen";
import {TestMock} from "../../test-mocks/test-mock";
import {login} from "../../store/api-actions";
import userEvent from "@testing-library/user-event";

jest.mock(`../../store/api-actions`);

test(`A click on sign in button should fire correct action`, () => {
  render(
      <TestMock emptyStore={false} authorized={false}>
        <LoginScreen />
      </TestMock>
  );

  const email = `email.example@email.com`;
  const password = `12345678`;

  expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  userEvent.type(screen.getByTestId(`email`), email);
  userEvent.type(screen.getByTestId(`password`), password);

  expect(screen.getByDisplayValue(email)).toBeInTheDocument();
  expect(screen.getByDisplayValue(password)).toBeInTheDocument();

  const signInButton = screen.getByRole(`button`, {name: /Sign in/i});
  expect(signInButton).not.toBeDisabled();
  userEvent.click(signInButton);
  expect(login).toHaveBeenCalledTimes(1);
  expect(login).toHaveBeenCalledWith({
    login: email,
    password
  });
});
