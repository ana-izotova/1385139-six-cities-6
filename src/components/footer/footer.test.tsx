import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Footer from "./footer";

it(`Footer should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByAltText} = render(
      <Router history={history}>
        <Footer />
      </Router>
  );

  const displayedImage = getByAltText(`6 cities logo`) as HTMLImageElement;
  expect(displayedImage.src).toContain(`img/logo.svg`);
});
