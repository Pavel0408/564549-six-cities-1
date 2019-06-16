import {ActionType} from "../action-type";

const initialState = {
  reviews: [],
  error: null
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_REVIEWS_SUCCESS: {
      return Object.assign({}, action.payload, {
        error: null
      });
    }
    case ActionType.FETCH_REVIEWS_FAILED: {
      return Object.assign({}, state, action.payload, {
        reviews: []
      });
    }
  }

  return state;
};
