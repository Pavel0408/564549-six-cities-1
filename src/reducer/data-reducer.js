import {ActionType} from "../action-type";

const cityName = `Amsterdam`;

const initialState = {
  cityName,
  activeOffer: null
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
    case ActionType.ACTIVE_OFFER:
      return Object.assign({}, state, action.payload);
  }

  return state;
};
