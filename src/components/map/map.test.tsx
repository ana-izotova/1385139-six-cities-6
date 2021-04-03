import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import Map from "./map";
import {allOffers} from "../../test-mocks/adapted-data-mock";

test(`Map component should render correctly`, () => {
  const {container} = render(
      <TestMock authorized={true} emptyStore={false}>
        <Map cards={allOffers}/>
      </TestMock>
  );

  expect(container).toMatchSnapshot();
});
