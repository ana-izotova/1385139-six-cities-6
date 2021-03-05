import {City} from "../../types";

export interface CityTabProps {
  currentCity: City,
  city: City,
  onUserClick: (currentCity: City) => void
}
