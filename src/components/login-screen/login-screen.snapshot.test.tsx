import React from 'react';
import {render} from '@testing-library/react';
import LoginScreen from "./login-screen";
import {TestMock} from "../../test-mocks/test-mock";

test(`Login screen should render correctly`, () => {
  const {container} = render(
      <TestMock emptyStore={false} authorized={false}>
        <LoginScreen />
      </TestMock>
  );

  expect(container).toMatchSnapshot();
});
