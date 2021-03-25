import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import MainScreen from "./main-screen";

test(`Main screen should render correctly`, () => {
  const {container} = render(
      <TestMock>
        <MainScreen />
      </TestMock>
  );

  expect(container).toMatchSnapshot();
});
