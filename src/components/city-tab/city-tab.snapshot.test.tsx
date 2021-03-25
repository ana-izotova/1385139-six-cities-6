import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import CityTab from "./city-tab";
import {Cities} from "../../const";

describe(`City tabs should render correctly`, () => {
  it(`City tab should render correctly for current city`, () => {
    const {container} = render(
        <TestMock>
          <CityTab city={Cities[0]}/>
        </TestMock>
    );

    expect(container).toMatchSnapshot();
  });

  it(`City tab should render correctly for non-current city`, () => {
    const {container} = render(
        <TestMock>
          <CityTab city={Cities[1]}/>
        </TestMock>
    );

    expect(container).toMatchSnapshot();
  });
});
