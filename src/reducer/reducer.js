import {combineReducers} from "redux";

import {NameSpace} from "./name-space";
import {dataReducer} from "./data-reducer";
import {fetchOffersReducer} from "./fetch-offers-reducer";

export const reducer = combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.FETCH_OFFERS]: fetchOffersReducer
});
