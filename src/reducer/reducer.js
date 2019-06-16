import {combineReducers} from "redux";

import {NameSpace} from "./name-space";
import {dataReducer} from "./data-reducer";
import {fetchOffersReducer} from "./fetch-offers-reducer";
import {authorizationReducer} from "./authorization-reducer";
import {reviewsReducer} from "./reviews-reducer";

export const reducer = combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.FETCH_OFFERS]: fetchOffersReducer,
  [NameSpace.AUTHORIZATION]: authorizationReducer,
  [NameSpace.REVIEWS]: reviewsReducer
});
