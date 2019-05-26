import {ActionType} from "./action-type";
import {offers} from "./mocks/offers";

const activeCity = `Amsterdam`;

const initialState = {
  activeCity,
  offers
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
    case ActionType.CHANGE_OFFERS:
      return Object.assign({}, state, action.payload);
  }

  return state;
};
