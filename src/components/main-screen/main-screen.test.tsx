import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import MainScreen from "./main-screen";

describe(`Main screen should render correctly`, () => {
  it(`Main screen should show no offers correctly when empty store`, () => {
    const {container} = render(
        <TestMock authorized={true} emptyStore={true}>
          <MainScreen />
        </TestMock>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Main screen should render correctly with offers`, () => {
    const {container} = render(
        <TestMock authorized={true} emptyStore={false}>
          <MainScreen />
        </TestMock>
    );

    expect(container).toMatchSnapshot();
  });
});


