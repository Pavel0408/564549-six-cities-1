import {ActionType} from "../action-type";

const initialState = {
  isLoading: false,
  error: null,
  offers: []
};

export const fetchOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_OFFERS_LOADING:
    case ActionType.FETCH_OFFERS_RECEIVED:
    case ActionType.FETCH_OFFERS_FAILED: {
      return Object.assign({}, state, action.payload);
    }
  }

  return state;
};
