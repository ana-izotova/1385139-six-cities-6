import React from "react";
import PrivateRoute from "./private-route";
import {render, screen} from "@testing-library/react";
import {TestMock} from "../../test-mocks/test-mock";

describe(`Private route works correctly`, () => {
  it(`Should render loader-screensaver component when data is not loaded`, () => {
    render(
        <TestMock emptyStore={true} pushUrl={`/private`} authorized={false}>
          <PrivateRoute
            path="/private"
            renderComponent={() => <h1>Private Route</h1>}
            redirect={() => <h1>Public Route</h1>}
          />
        </TestMock>
    );

    expect(screen.getByText(/Loading, please wait/i)).toBeInTheDocument();
  });

  it(`Should render component for public route, when user not authorized`, () => {
    render(
        <TestMock authorized={false} emptyStore={false}>
          <PrivateRoute
            path="/private"
            renderComponent={() => <h1>Private Route</h1>}
            redirect={() => <h1>Public Route</h1>}
          />
        </TestMock>
    );
    expect(screen.getByText(/Public Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Private Route/i)).not.toBeInTheDocument();
  });

  it(`Should render component for private route, when user authorized`, () => {
    render(
        <TestMock authorized={true} emptyStore={false}>
          <PrivateRoute
            path="/private"
            renderComponent={() => <h1>Private Route</h1>}
            redirect={() => <h1>Public Route</h1>}
          />
        </TestMock>
    );
    expect(screen.getByText(/Private Route/i)).toBeInTheDocument();
    expect(screen.queryByText(/Public Route/i)).not.toBeInTheDocument();
  });
});
