interface Location {
  latitude: number,
  longitude: number,
  zoom: number
}

interface Host {
  id: number,
  name: string,
  is_pro: boolean,
  avatar_url: string
}

interface City {
  name: string,
  location: Location
}

interface OfferCard {
  id: number,
  preview_image: string,
  rating: number,
  price: number,
  title: string,
  type: string,
  is_favorite: boolean,
  is_premium: boolean,
  bedrooms: number,
  description: string,
  max_adults: number,
  images: Array<string>,
  goods: Array<string>,
  location: Location,
  host: Host,
  city: City
}

type OfferCards = Array<OfferCard>;

export {OfferCard, OfferCards};
