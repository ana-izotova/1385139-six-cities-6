import {SortType} from "../const";
import {
  adaptedTestOffer,
  adaptedTestOffer2,
  comments,
} from "../test-mocks/adapted-data-mock";
import {OfferCard} from "../types";
import {sortByDate, sortCards} from "./sorting";

describe(`Sorting cards should work correctly`, () => {
  it(`Sorting "price high to low" should work correctly`, () => {
    const sortType = SortType.PRICE_HIGH_TO_LOW;
    const testOffers: Array<OfferCard> = [adaptedTestOffer2, adaptedTestOffer];
    const sortedOffers: Array<OfferCard> = [
      adaptedTestOffer,
      adaptedTestOffer2,
    ];

    expect(sortCards(testOffers, sortType)).toEqual(sortedOffers);
  });

  it(`Sorting "price low to high" should work correctly`, () => {
    const sortType = SortType.PRICE_LOW_TO_HIGH;
    const testOffers: Array<OfferCard> = [adaptedTestOffer, adaptedTestOffer2];
    const sortedOffers: Array<OfferCard> = [
      adaptedTestOffer2,
      adaptedTestOffer,
    ];

    expect(sortCards(testOffers, sortType)).toEqual(sortedOffers);
  });

  it(`Sorting "top rated first" should work correctly`, () => {
    const sortType = SortType.TOP_RATED_FIRST;
    const testOffers: Array<OfferCard> = [adaptedTestOffer, adaptedTestOffer2];
    const sortedOffers: Array<OfferCard> = [
      adaptedTestOffer2,
      adaptedTestOffer,
    ];

    expect(sortCards(testOffers, sortType)).toEqual(sortedOffers);
  });

  it(`Should return default sorting`, () => {
    const sortType = SortType.POPULAR;
    const testOffers: Array<OfferCard> = [adaptedTestOffer, adaptedTestOffer2];

    expect(sortCards(testOffers, sortType)).toEqual(testOffers);
  });
});

test(`Sort comments by date should work correctly`, () => {
  const testComments = comments;
  const sortedComments = [
    {
      id: 1,
      user: {
        id: 12,
        isPro: true,
        name: `Isaac`,
        avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`
      },
      rating: 2,
      comment: `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
      date: `2021-03-10T08:04:28.646Z`
    },
    {
      id: 2,
      user: {
        id: 15,
        isPro: false,
        name: `Kendall`,
        avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`
      },
      rating: 3,
      comment: `We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)`,
      date: `2021-02-12T08:04:28.647Z`
    },
    {
      id: 3,
      user: {
        id: 14,
        isPro: true,
        name: `Corey`,
        avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`
      },
      rating: 4,
      comment: `The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.`,
      date: `2021-02-12T08:04:28.647Z`
    },
    {
      id: 4,
      user: {
        id: 18,
        isPro: true,
        name: `Sophie`,
        avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`
      },
      rating: 2,
      comment: `I stayed here for one night and it was an unpleasant experience.`,
      date: `2021-02-12T08:04:28.647Z`
    }
  ];

  expect(testComments.sort(sortByDate)).toEqual(sortedComments);
});

test(`Sort comments by date function sorts correctly`, () => {
  const firstComment = {
    id: 1,
    user: {
      id: 12,
      isPro: true,
      name: `Isaac`,
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
    },
    rating: 2,
    comment: `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
    date: `2021-03-10T08:04:28.646Z`,
  };
  const secondComment = {
    id: 2,
    user: {
      id: 15,
      isPro: false,
      name: `Kendall`,
      avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
    },
    rating: 3,
    comment: `We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)`,
    date: `2021-02-12T08:04:28.647Z`,
  };

  expect(sortByDate(firstComment, secondComment)).toBeLessThan(0);
});
