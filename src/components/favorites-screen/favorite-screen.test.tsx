import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import FavoritesScreen from "./favorites-screen";

test(`Favorite screen should render correctly`, () => {
  const {container} = render(
      <TestMock>
        <FavoritesScreen />
      </TestMock>
  );

  expect(container).toMatchSnapshot();
});
