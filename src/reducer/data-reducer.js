import {ActionType} from "../action-type";

const cityName = `Amsterdam`;

const initialState = {
  cityName
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return Object.assign({}, state, action.payload);
  }

  return state;
};
