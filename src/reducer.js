import {ActionType} from "./action-type";

const cityName = `Amsterdam`;

const initialState = {
  cityName,
  offers: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
    case ActionType.CHANGE_OFFERS:
      return Object.assign({}, state, action.payload);
  }

  return state;
};
