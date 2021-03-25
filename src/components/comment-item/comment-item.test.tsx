import React from 'react';
import {render} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import CommentItem from "./comment-item";
import {adaptedTestComment} from "../../test-mocks/adapted-data-mock";

test(`Comment item component should render correctly`, () => {
  const {container} = render(
      <TestMock>
        <CommentItem {...adaptedTestComment} />
      </TestMock>
  );

  expect(container).toMatchSnapshot();
});
