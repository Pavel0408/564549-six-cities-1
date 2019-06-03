import {ActionType} from "../action-type";

const initialState = {
  isLoading: false,
  error: null,
  offers: []
};

export const fetchOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_OFFERS_LOADING: {
      return Object.assign({}, state, {
        isLoading: true,
        error: null
      });
    }
    case ActionType.FETCH_OFFERS_RECEIVED: {
      return Object.assign({}, state, action.payload, {
        isLoading: false,
        error: null
      });
    }
    case ActionType.FETCH_OFFERS_FAILED: {
      return Object.assign({}, state, action.payload, {
        isLoading: false
      });
    }
  }

  return state;
};
