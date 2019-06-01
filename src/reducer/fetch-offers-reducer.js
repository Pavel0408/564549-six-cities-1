import {ActionType} from "../action-type";

const initialState = {
  isLoading: false,
  isFailed: false,
  isLoaded: false,
  error: null
};

export const fetchOffersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_OFFERS: {
      return Object.assign({}, state, {
        isLoading: true
      });
    }
    case ActionType.FETCH_OFFERS_RECEIVED: {
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: false,
        isLoaded: true
      });
    }
    case ActionType.FETCH_OFFERS_FAILED: {
      return Object.assign({}, state, {
        isLoading: false,
        isLoaded: false,
        isFailed: true
      });
    }
  }

  return state;
};
