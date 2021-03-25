import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import NoCityOffers from "./no-city-offers";

test(`No city offers component should render correctly`, () => {
  const {container} = render(
      <TestMock emptyStore={true}>
        <NoCityOffers />
      </TestMock>
  );

  expect(container).toMatchSnapshot();
});
