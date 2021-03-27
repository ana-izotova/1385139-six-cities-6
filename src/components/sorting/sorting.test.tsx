import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import Sorting from "./sorting";

test(`Sorting should render correctly`, () => {
  const {container} = render(
      <TestMock authorized={true} emptyStore={false}>
        <Sorting />
      </TestMock>
  );

  expect(container).toMatchSnapshot();
});
