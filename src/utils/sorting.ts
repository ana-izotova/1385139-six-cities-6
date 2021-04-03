import {Comment, OfferCard} from "../types";
import {SortType} from "../const";

const sortCardsByPriceHighToLow = (
    card1: OfferCard,
    card2: OfferCard
): number => {
  return card2.price - card1.price;
};

const sortCardsByPriceLowToHigh = (
    card1: OfferCard,
    card2: OfferCard
): number => {
  return card1.price - card2.price;
};

const sortByRating = (card1: OfferCard, card2: OfferCard): number => {
  return card2.rating - card1.rating;
};

export const sortCards = (
    cards: Array<OfferCard>,
    sortType: string
): Array<OfferCard> => {
  switch (sortType) {
    case SortType.PRICE_HIGH_TO_LOW:
      return cards.slice().sort(sortCardsByPriceHighToLow);
    case SortType.PRICE_LOW_TO_HIGH:
      return cards.slice().sort(sortCardsByPriceLowToHigh);
    case SortType.TOP_RATED_FIRST:
      return cards.slice().sort(sortByRating);
    default:
      return cards;
  }
};

export const sortByDate = (comment1: Comment, comment2: Comment): number => {
  const firstCommentDate = new Date(comment1.date);
  const secondCommentDate = new Date(comment2.date);
  return secondCommentDate.getTime() - firstCommentDate.getTime();
};
