import React from 'react';
import {render, screen} from '@testing-library/react';
import HeaderNav from "./header-nav";
import {TestMock} from "../../test-mocks/test-mock";
import userEvent from "@testing-library/user-event";
import {logoutFromSite} from "../../store/api-actions";

jest.mock(`../../store/api-actions`);

describe(`Logout logic should work correctly`, () => {
  it(`Sign in link should appear for unauthorized user`, () => {
    render(
        <TestMock emptyStore={false} authorized={false}>
          <HeaderNav />
        </TestMock>
    );

    const signInLink = screen.getByRole(`link`, {name: /Sign in/i});
    expect(signInLink).toBeInTheDocument();
  });

  it(`Logout link should appear for authorized user`, () => {
    render(
        <TestMock emptyStore={false} authorized={true}>
          <HeaderNav />
        </TestMock>
    );

    const logoutButton = screen.getByRole(`link`, {name: /Exit/i});
    userEvent.click(logoutButton);
    expect(logoutFromSite).toHaveBeenCalledTimes(1);
  });
});
