import React from 'react';
import {render, screen} from '@testing-library/react';
import {TestMock} from "../../test-mocks/test-mock";
import PlaceCard from "./place-card";
import {adaptedTestOffer} from "../../test-mocks/adapted-data-mock";
import {changeCardFavoriteStatus} from "../../store/api-actions";
import userEvent from "@testing-library/user-event";
import {FavoriteStatus} from "../../const";

jest.mock(`../../store/api-actions`, () => {
  return {
    changeCardFavoriteStatus: jest.fn().mockImplementation(() => {
      return {
        type: `test`
      };
    })
  };
});

describe(`Place card logic works correctly`, () => {
  it(`Place card hover & unhover events fire correct callback`, () => {
    const activeCardIdChangeStateHandler = jest.fn();

    render(
        <TestMock authorized={true} emptyStore={false}>
          <PlaceCard card={adaptedTestOffer} offerType={`cities`} onActiveCardIdStateChange={activeCardIdChangeStateHandler}/>
        </TestMock>
    );

    const card = screen.getByRole(`article`);
    userEvent.hover(card);
    expect(activeCardIdChangeStateHandler).toBeCalledWith(adaptedTestOffer.id);

    userEvent.unhover(card);
    expect(activeCardIdChangeStateHandler).toBeCalledWith(null);
  });

  it(`Change favorite status on click`, () => {
    render(
        <TestMock authorized={true} emptyStore={false}>
          <PlaceCard card={adaptedTestOffer} offerType={`near-places`}/>
        </TestMock>
    );

    const favoriteButton = screen.getByRole(`button`, {name: /To bookmarks/i});
    userEvent.click(favoriteButton);
    expect(changeCardFavoriteStatus).toBeCalledWith(1, FavoriteStatus.FAVORITE);
  });
});


