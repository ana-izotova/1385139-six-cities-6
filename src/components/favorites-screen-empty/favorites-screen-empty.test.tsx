import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import FavoritesScreenEmpty from "./favorites-screen-empty";

test(`Favorites' empty screen should render correctly`, () => {
  const {container} = render(
      <TestMock emptyStore={true}>
        <FavoritesScreenEmpty />
      </TestMock>
  );

  expect(container).toMatchSnapshot();
});
