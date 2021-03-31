import {render, screen} from "@testing-library/react";
import {TestMock} from "../../test-mocks/test-mock";
import RoomScreen from "./room-screen";
import userEvent from "@testing-library/user-event";
import {changeFavoriteOfferScreenStatus} from "../../store/api-actions";
import {FavoriteStatus} from "../../const";
import React from "react";

jest.mock(`../../store/api-actions`, () => {
  return {
    changeFavoriteOfferScreenStatus: jest.fn().mockImplementation(() => {
      return {
        type: `test`
      };
    }),
    fetchOfferComments: jest.fn().mockImplementation(() => {
      return {
        type: `test`
      };
    }),
    fetchOffersNearby: jest.fn().mockImplementation(() => {
      return {
        type: `test`
      };
    }),
    fetchSingleOffersData: jest.fn().mockImplementation(() => {
      return {
        type: `test`
      };
    })
  };
});

test(`Change card's favorite status on click`, () => {
  render(
      <TestMock authorized={true} emptyStore={false}>
        <RoomScreen cardId={1}/>
      </TestMock>
  );

  const favoriteButton = screen.getAllByRole(`button`, {name: /To bookmarks/i})[0];
  userEvent.click(favoriteButton);
  expect(changeFavoriteOfferScreenStatus).toBeCalledWith(1, FavoriteStatus.FAVORITE);
});
