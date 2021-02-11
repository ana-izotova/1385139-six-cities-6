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

interface CommentAuthor {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string
}

export interface Comment {
  comment: string,
  date: Date,
  id: number,
  rating: number,
  user: CommentAuthor
}

export type Comments = Array<Comment>;

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
  city: City,
  comments: Comments
}

export type OfferCards = { cards: Array<OfferCard> };
