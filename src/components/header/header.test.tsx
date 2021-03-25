import React from 'react';
import {render} from '@testing-library/react';
import Header from "./header";
import {TestMock} from "../../test-mocks/test-mock";

describe(`Header should render correctly`, () => {
  it(`Header should render correctly with unauthorized user`, () => {
    const {container} = render(
        <TestMock emptyStore={true}>
          <Header />
        </TestMock>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Header should render correctly with authorized user`, () => {
    const {container} = render(
        <TestMock>
          <Header />
        </TestMock>
    );

    expect(container).toMatchSnapshot();
  });
});
