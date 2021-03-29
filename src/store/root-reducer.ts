import {combineReducers} from 'redux';
import {allOffers} from "./all-offers/all-offers";
import {singleOffer} from "./single-offer/single-offer";
import {user} from "./user/user";
import {favorites} from "./favorites/favorites";
import {NameSpace} from "../const";

export const rootReducer = combineReducers({
  [NameSpace.USER]: user,
  [NameSpace.ALL_OFFERS]: allOffers,
  [NameSpace.SINGLE_OFFER]: singleOffer,
  [NameSpace.FAVORITES]: favorites
});

export type RootStateType = ReturnType<typeof rootReducer>
