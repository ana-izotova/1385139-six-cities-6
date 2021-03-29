import React from 'react';
import {render} from '@testing-library/react';
import HeaderNav from "./header-nav";
import {TestMock} from "../../test-mocks/test-mock";

describe(`Header navigation should render correctly`, () => {
  it(`Header navigation should render correctly with unauthorized user`, () => {
    const {container} = render(
        <TestMock emptyStore={true} authorized={false}>
          <HeaderNav />
        </TestMock>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Header navigation should render correctly with authorized user`, () => {
    const {container} = render(
        <TestMock emptyStore={false} authorized={true}>
          <HeaderNav />
        </TestMock>
    );

    expect(container).toMatchSnapshot();
  });
});
