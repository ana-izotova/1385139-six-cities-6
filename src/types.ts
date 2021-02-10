interface Location {
  latitude: number,
  longitude: number,
  zoom: number
}

interface Host {
  id: number,
  name: string,
  isPro: boolean,
  avatarUrl: string
}

interface City {
  name: string,
  location: Location
}

export interface OfferCard {
  id: number,
  previewImage: string,
  rating: number,
  price: number,
  title: string,
  type: string,
  isFavorite: boolean,
  isPremium: boolean,
  bedrooms: number,
  description: string,
  maxAdults: number,
  images: Array<string>,
  goods: Array<string>,
  location: Location,
  host: Host,
  city: City
}

export type OfferCards = { cards: Array<OfferCard> };
