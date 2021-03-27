import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import FavoritesScreen from "./favorites-screen";

describe(`Favorite screen should render correctly`, () => {
  it(`Should render empty favorites list when no favorites`, () => {
    const {container} = render(
        <TestMock emptyStore={true} authorized={true} >
          <FavoritesScreen />
        </TestMock>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Should render favorites list correctly`, () => {
    const {container} = render(
        <TestMock emptyStore={false} authorized={true} >
          <FavoritesScreen />
        </TestMock>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Should show loader screensaver component if favorite cards are not loaded`, () => {
    const {container} = render(
        <TestMock emptyStore={true} authorized={false} >
          <FavoritesScreen />
        </TestMock>
    );

    expect(container).toMatchSnapshot();
  });
});
