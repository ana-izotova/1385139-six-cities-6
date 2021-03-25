import React from 'react';
import {render, screen} from '@testing-library/react';
import HeaderNav from "./header-nav";
import {TestMock} from "../../test-mocks/test-mock";

describe(`Header navigation should render correctly`, () => {
  it(`Header navigation should render correctly with unauthorized user`, () => {
    const {container} = render(
        <TestMock emptyStore={true}>
          <HeaderNav />
        </TestMock>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Header navigation should render correctly with authorized user`, () => {
    const {container} = render(
        <TestMock>
          <HeaderNav />
        </TestMock>
    );

    expect(container).toMatchSnapshot();
    expect(screen.getByText(`Выход`)).toBeInTheDocument();
  });
});
