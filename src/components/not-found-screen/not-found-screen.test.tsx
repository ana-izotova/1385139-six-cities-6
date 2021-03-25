import React from 'react';
import {render, screen} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import NotFoundScreen from './not-found-screen';

test(`NotFoundScreen component renders correctly`, () => {
  render(
      <TestMock>
        <NotFoundScreen />
      </TestMock>
  );
  expect(screen.getByText(`404. Page not found`)).toBeInTheDocument();
});
