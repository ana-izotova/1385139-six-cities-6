import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import RoomScreen from "./room-screen";

describe(`Room screen should render correctly`, () => {
  it(`Room screen should render correctly when authorized`, () => {
    const {container} = render(
        <TestMock emptyStore={false} authorized={true}>
          <RoomScreen cardId={1} />
        </TestMock>
    );

    expect(container).toMatchSnapshot();
  });

  it(`Room screen should render correctly when unauthorized`, () => {
    const {container} = render(
        <TestMock emptyStore={false} authorized={false}>
          <RoomScreen cardId={1} />
        </TestMock>
    );

    expect(container).toMatchSnapshot();
  });
});
