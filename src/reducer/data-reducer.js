import {ActionType} from "../action-type";
import {SortName} from "../sort-functions";

const cityName = `Amsterdam`;

const initialState = {
  cityName,
  activeOffer: null,
  sort: SortName.POPULAR,
  activePinOffer: null
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
    case ActionType.ACTIVE_OFFER:
    case ActionType.CHANGE_SORT:
    case ActionType.ACTIVE_PIN_OFFER_CHANGE:
      return Object.assign({}, state, action.payload);
  }

  return state;
};
