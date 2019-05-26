import {ActionType} from "./action-type";
import {randomOffers} from "./mocks/offers";

const cityName = `Amsterdam`;

const initialState = {
  cityName,
  offers: randomOffers
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
    case ActionType.CHANGE_OFFERS:
      return Object.assign({}, state, action.payload);
  }

  return state;
};
