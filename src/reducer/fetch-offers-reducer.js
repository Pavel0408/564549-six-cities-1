import {ActionType} from "../action-type";

const initialState = {
  isLoading: false,
  isFailed: false,
  isLoaded: false,
  error: null
};

export const fetchOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_OFFERS:
    case ActionType.FETCH_OFFERS_RECEIVED:
    case ActionType.FETCH_OFFERS_FAILED: {
      return Object.assign({}, state, action.payload);
    }
  }

  return state;
};
