import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import CitiesList from "./cities-list";

test(`Cities list should render correctly`, () => {
  const {container} = render(
      <TestMock emptyStore={false} authorized={false}>
        <CitiesList />
      </TestMock>
  );

  expect(container).toMatchSnapshot();
});
