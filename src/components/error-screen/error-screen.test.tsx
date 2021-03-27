import React from 'react';
import {render, screen} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import ErrorScreen from './error-screen';
import {HttpCode} from "../../const";

describe(`ErrorScreen component renders correctly`, () => {
  it(`ErrorScreen component renders correctly for error 404`, () => {
    render(
        <TestMock emptyStore={false} authorized={true}>
          <ErrorScreen errorCode={HttpCode.NOT_FOUND}/>
        </TestMock>
    );
    expect(screen.getByText(`Error 404. Page not found.`)).toBeInTheDocument();
  });

  it(`ErrorScreen component renders correctly for other error`, () => {
    render(
        <TestMock emptyStore={false} authorized={true}>
          <ErrorScreen errorCode={500}/>
        </TestMock>
    );
    expect(screen.getByText(`Error 500. Please, try again later.`)).toBeInTheDocument();
  });
});
