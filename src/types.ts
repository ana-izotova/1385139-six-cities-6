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

export interface City {
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
  date: string,
  id: number,
  rating: number,
  user: CommentAuthor
}

export interface CommentToPost {
  comment: string,
  rating: number
}

export interface UserData {
  login: string,
  userAvatar: string
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
  city: City
}
