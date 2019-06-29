import {ActionType} from "../action-type";

const initialState = {
  isLoading: false,
  error: null,
  favoriteOffers: []
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FAVORITE_LOADING: {
      return Object.assign({}, state, {
        isLoading: true,
        error: null
      });
    }
    case ActionType.FAVORITE_RECEIVED: {
      return Object.assign({}, state, action.payload, {
        isLoading: false,
        error: null
      });
    }
    case ActionType.FETCH_FAVORITE_FAILED: {
      return Object.assign({}, state, action.payload, {
        isLoading: false
      });
    }
  }

  return state;
};
