import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import Footer from "./footer";

test(`Footer component should render correctly`, () => {
  const {container} = render(
      <TestMock authorized={true} emptyStore={false}>
        <Footer />
      </TestMock>
  );

  expect(container).toMatchSnapshot();
});

