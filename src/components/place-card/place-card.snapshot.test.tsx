import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import PlaceCard from "./place-card";
import {adaptedTestOffer} from "../../test-mocks/adapted-data-mock";

test(`Place card should render correctly`, () => {
  const {container} = render(
      <TestMock authorized={true} emptyStore={false}>
        <PlaceCard card={adaptedTestOffer} offerType={`near-places`}/>
      </TestMock>
  );

  expect(container).toMatchSnapshot();
});
