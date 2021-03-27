import {adaptToClient, adaptCommentToClient} from "../utils/adapters";
import {
  testComment,
  testOffer,
  testOfferFavorited,
  testOffer2,
  testOffer2Favorited,
} from "./server-data-mock";
import {OfferCard, Comment} from "../types";

export const adaptedTestOffer = adaptToClient(testOffer);

export const adaptedTestOffer2 = adaptToClient(testOffer2);

export const adaptedTestComment: Comment = adaptCommentToClient(testComment);

export const adaptedTestOfferFavorited = adaptToClient(testOfferFavorited);

export const adaptedTestOffer2Favorited = adaptToClient(testOffer2Favorited);

export const currentOffer: OfferCard = {
  city: {
    name: `Paris`,
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13,
    },
  },
  previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
  images: [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
  ],
  title: `The house among olive `,
  isFavorite: false,
  isPremium: true,
  rating: 3,
  type: `room`,
  bedrooms: 1,
  maxAdults: 1,
  price: 169,
  goods: [
    `Breakfast`,
    `Air conditioning`,
    `Laptop friendly workspace`,
    `Washer`,
  ],
  host: {
    id: 25,
    name: `Angelina`,
    isPro: true,
    avatarUrl: `img/avatar-angelina.jpg`,
  },
  description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
  location: {
    latitude: 48.83861,
    longitude: 2.350499,
    zoom: 16,
  },
  id: 1,
};

export const offersNearby: Array<OfferCard> = [
  {
    city: {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
    ],
    title: `Waterfront with extraordinary view`,
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    type: `apartment`,
    bedrooms: 5,
    maxAdults: 6,
    price: 310,
    goods: [
      `Dishwasher`,
      `Towels`,
      `Washer`,
      `Breakfast`,
      `Baby seat`,
      `Air conditioning`,
      `Fridge`,
      `Laptop friendly workspace`,
      `Coffee machine`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    location: {
      latitude: 50.844556999999995,
      longitude: 4.346697,
      zoom: 16,
    },
    id: 2,
  },
  {
    city: {
      name: `Cologne`,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
    ],
    title: `Penthouse, 4-5 rooms + 5 balconies`,
    isFavorite: false,
    isPremium: true,
    rating: 4.2,
    type: `hotel`,
    bedrooms: 4,
    maxAdults: 6,
    price: 182,
    goods: [
      `Laptop friendly workspace`,
      `Washer`,
      `Breakfast`,
      `Air conditioning`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16,
    },
    id: 3,
  },
  {
    city: {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
    ],
    title: `The house among olive `,
    isFavorite: false,
    isPremium: false,
    rating: 5,
    type: `room`,
    bedrooms: 1,
    maxAdults: 1,
    price: 115,
    goods: [`Washer`, `Laptop friendly workspace`, `Breakfast`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
    location: {
      latitude: 50.849557,
      longitude: 4.374696999999999,
      zoom: 16,
    },
    id: 4,
  },
];

export const comments: Array<Comment> = [
  {
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
  },
  {
    id: 2,
    user: {
      id: 15,
      isPro: false,
      name: `Kendall`,
      avatarUrl:
        `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
    },
    rating: 3,
    comment:
      `We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)`,
    date: `2021-02-12T08:04:28.647Z`,
  },
  {
    id: 3,
    user: {
      id: 14,
      isPro: true,
      name: `Corey`,
      avatarUrl:
        `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/5.jpg`,
    },
    rating: 4,
    comment:
      `The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.`,
    date: `2021-02-12T08:04:28.647Z`,
  },
  {
    id: 4,
    user: {
      id: 18,
      isPro: true,
      name: `Sophie`,
      avatarUrl:
        `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/9.jpg`,
    },
    rating: 2,
    comment: `I stayed here for one night and it was an unpleasant experience.`,
    date: `2021-02-12T08:04:28.647Z`,
  },
];

export const allOffers: Array<OfferCard> = [
  {
    city: {
      name: `Paris`,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
    ],
    title: `The house among olive `,
    isFavorite: true,
    isPremium: true,
    rating: 3,
    type: `room`,
    bedrooms: 1,
    maxAdults: 1,
    price: 169,
    goods: [
      `Breakfast`,
      `Air conditioning`,
      `Laptop friendly workspace`,
      `Washer`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    location: {
      latitude: 48.83861,
      longitude: 2.350499,
      zoom: 16,
    },
    id: 1,
  },
  {
    city: {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
    ],
    title: `Waterfront with extraordinary view`,
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    type: `apartment`,
    bedrooms: 5,
    maxAdults: 6,
    price: 310,
    goods: [
      `Dishwasher`,
      `Towels`,
      `Washer`,
      `Breakfast`,
      `Baby seat`,
      `Air conditioning`,
      `Fridge`,
      `Laptop friendly workspace`,
      `Coffee machine`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    location: {
      latitude: 50.844556999999995,
      longitude: 4.346697,
      zoom: 16,
    },
    id: 2,
  },
  {
    city: {
      name: `Cologne`,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
    ],
    title: `Penthouse, 4-5 rooms + 5 balconies`,
    isFavorite: true,
    isPremium: true,
    rating: 4.2,
    type: `hotel`,
    bedrooms: 4,
    maxAdults: 6,
    price: 182,
    goods: [
      `Laptop friendly workspace`,
      `Washer`,
      `Breakfast`,
      `Air conditioning`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16,
    },
    id: 3,
  },
  {
    city: {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
    ],
    title: `The house among olive `,
    isFavorite: false,
    isPremium: false,
    rating: 5,
    type: `room`,
    bedrooms: 1,
    maxAdults: 1,
    price: 115,
    goods: [`Washer`, `Laptop friendly workspace`, `Breakfast`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
    location: {
      latitude: 50.849557,
      longitude: 4.374696999999999,
      zoom: 16,
    },
    id: 4,
  },
  {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
    ],
    title: `The Joshua Tree House`,
    isFavorite: false,
    isPremium: false,
    rating: 3.3,
    type: `hotel`,
    bedrooms: 4,
    maxAdults: 5,
    price: 457,
    goods: [`Laptop friendly workspace`, `Washer`, `Breakfast`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    location: {
      latitude: 52.36354,
      longitude: 4.889976,
      zoom: 16,
    },
    id: 5,
  },
  {
    city: {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
    ],
    title: `Penthouse, 4-5 rooms + 5 balconies`,
    isFavorite: false,
    isPremium: false,
    rating: 4.8,
    type: `house`,
    bedrooms: 2,
    maxAdults: 3,
    price: 525,
    goods: [
      `Air conditioning`,
      `Baby seat`,
      `Coffee machine`,
      `Dishwasher`,
      `Laptop friendly workspace`,
      `Towels`,
      `Breakfast`,
      `Washer`,
      `Fridge`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    location: {
      latitude: 50.827557,
      longitude: 4.336697,
      zoom: 16,
    },
    id: 6,
  },
  {
    city: {
      name: `Dusseldorf`,
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
    ],
    title: `Nice, cozy, warm big bed apartment`,
    isFavorite: false,
    isPremium: false,
    rating: 4,
    type: `house`,
    bedrooms: 3,
    maxAdults: 9,
    price: 117,
    goods: [`Breakfast`, `Washer`, `Laptop friendly workspace`],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
    location: {
      latitude: 51.214402,
      longitude: 6.764314000000001,
      zoom: 16,
    },
    id: 7,
  },
  {
    city: {
      name: `Cologne`,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    ],
    title: `The Joshua Tree House`,
    isFavorite: false,
    isPremium: false,
    rating: 3.1,
    type: `house`,
    bedrooms: 4,
    maxAdults: 4,
    price: 983,
    goods: [
      `Towels`,
      `Laptop friendly workspace`,
      `Breakfast`,
      `Fridge`,
      `Air conditioning`,
      `Washer`,
      `Baby seat`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
    location: {
      latitude: 50.957361,
      longitude: 6.9509739999999995,
      zoom: 16,
    },
    id: 8,
  },
  {
    city: {
      name: `Hamburg`,
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
    ],
    title: `Penthouse, 4-5 rooms + 5 balconies`,
    isFavorite: false,
    isPremium: false,
    rating: 3.2,
    type: `room`,
    bedrooms: 1,
    maxAdults: 1,
    price: 182,
    goods: [
      `Washer`,
      `Baby seat`,
      `Towels`,
      `Air conditioning`,
      `Fridge`,
      `Laptop friendly workspace`,
      `Breakfast`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
    location: {
      latitude: 53.565341000000004,
      longitude: 9.978654,
      zoom: 16,
    },
    id: 9,
  },
  {
    city: {
      name: `Hamburg`,
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
    ],
    title: `Amazing and Extremely Central Flat`,
    isFavorite: false,
    isPremium: false,
    rating: 3.3,
    type: `hotel`,
    bedrooms: 2,
    maxAdults: 9,
    price: 271,
    goods: [
      `Air conditioning`,
      `Laptop friendly workspace`,
      `Breakfast`,
      `Baby seat`,
      `Towels`,
      `Washer`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    location: {
      latitude: 53.546341000000005,
      longitude: 10.022654000000001,
      zoom: 16,
    },
    id: 10,
  },
  {
    city: {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
    ],
    title: `Canal View Prinsengracht`,
    isFavorite: true,
    isPremium: false,
    rating: 2.8,
    type: `house`,
    bedrooms: 2,
    maxAdults: 3,
    price: 638,
    goods: [
      `Laptop friendly workspace`,
      `Washing machine`,
      `Washer`,
      `Baby seat`,
      `Towels`,
      `Air conditioning`,
      `Coffee machine`,
      `Breakfast`,
      `Dishwasher`,
      `Fridge`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
    location: {
      latitude: 52.36354,
      longitude: 4.911976,
      zoom: 16,
    },
    id: 11,
  },
];

export const favoriteOffers: Array<OfferCard> = [
  {
    city: {
      name: `Paris`,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
    ],
    title: `The house among olive `,
    isFavorite: true,
    isPremium: true,
    rating: 3,
    type: `room`,
    bedrooms: 1,
    maxAdults: 1,
    price: 169,
    goods: [
      `Breakfast`,
      `Air conditioning`,
      `Laptop friendly workspace`,
      `Washer`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    location: {
      latitude: 48.83861,
      longitude: 2.350499,
      zoom: 16,
    },
    id: 1,
  },
  {
    city: {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
    ],
    title: `Waterfront with extraordinary view`,
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    type: `apartment`,
    bedrooms: 5,
    maxAdults: 6,
    price: 310,
    goods: [
      `Dishwasher`,
      `Towels`,
      `Washer`,
      `Breakfast`,
      `Baby seat`,
      `Air conditioning`,
      `Fridge`,
      `Laptop friendly workspace`,
      `Coffee machine`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    location: {
      latitude: 50.844556999999995,
      longitude: 4.346697,
      zoom: 16,
    },
    id: 2,
  },
  {
    city: {
      name: `Cologne`,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13,
      },
    },
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
    ],
    title: `Penthouse, 4-5 rooms + 5 balconies`,
    isFavorite: true,
    isPremium: true,
    rating: 4.2,
    type: `hotel`,
    bedrooms: 4,
    maxAdults: 6,
    price: 182,
    goods: [
      `Laptop friendly workspace`,
      `Washer`,
      `Breakfast`,
      `Air conditioning`,
    ],
    host: {
      id: 25,
      name: `Angelina`,
      isPro: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    description: `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
    location: {
      latitude: 50.950361,
      longitude: 6.961974,
      zoom: 16,
    },
    id: 3,
  },
];
