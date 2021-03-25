import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import LoaderScreensaver from "./loader-screensaver";

test(`Favorite screen should render correctly`, () => {
  const {container} = render(
      <TestMock>
        <LoaderScreensaver />
      </TestMock>
  );

  expect(container).toMatchSnapshot();
});
