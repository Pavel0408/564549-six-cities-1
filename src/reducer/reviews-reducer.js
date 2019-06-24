import {ActionType} from "../action-type";

const initialState = {
  reviews: [],
  error: null,
  isSending: false,
  sendingError: null
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_REVIEWS_SUCCESS: {
      return Object.assign({}, action.payload, {
        error: null,
        sendingError: null,
        isSending: false
      });
    }
    case ActionType.FETCH_REVIEWS_FAILED: {
      return Object.assign({}, state, action.payload, {
        reviews: []
      });
    }
    case ActionType.SENDING_REVIEWS: {
      return Object.assign({}, state, {
        isSending: true,
        sendingError: false
      });
    }
    case ActionType.SENDING_REVIEWS_ERROR: {
      return Object.assign({}, state, action.payload, {
        isSending: false
      });
    }
  }

  return state;
};
