import {ActionType} from "../action-type";

import {reviewsReducer} from "./reviews-reducer";

describe(`reviewsReducer is correct`, () => {
  // тест на неподдерживаемый action
  it(`returns correctly state on incorrect action`, () => {
    const incorrectAction = {
      type: ActionType.ACTIVE_OFFER,
      payload: {
        user: `something`
      }
    };
    const state = {
      reviews: [],
      error: null,
      isSending: false,
      sendingError: null
    };
    expect(reviewsReducer(state, incorrectAction)).toEqual({
      reviews: [],
      error: null,
      isSending: false,
      sendingError: null
    });
  });
  it(`returns initial state without parameters`, () => {
    expect(reviewsReducer(undefined, {})).toEqual({
      reviews: [],
      error: null,
      isSending: false,
      sendingError: null
    });
  });
  it(`returns correctly state when fetch reviews success`, () => {
    const fetchReviewsSuccessAction = {
      type: ActionType.FETCH_REVIEWS_SUCCESS,
      payload: {
        reviews: []
      }
    };
    expect(reviewsReducer({}, fetchReviewsSuccessAction)).toEqual({
      error: null,
      sendingError: null,
      isSending: false,
      reviews: []
    });
  });
  it(`returns correctly state when fetch reviews failed`, () => {
    const fetchReviewsFailedAction = {
      type: ActionType.FETCH_REVIEWS_FAILED,
      payload: {
        error: `error`
      }
    };
    expect(reviewsReducer({}, fetchReviewsFailedAction)).toEqual({
      error: `error`,
      reviews: []
    });
  });
  it(`returns correctly state when reviews sending`, () => {
    const sendingReviewsAction = {
      type: ActionType.SENDING_REVIEWS,
    };
    expect(reviewsReducer({}, sendingReviewsAction)).toEqual({
      isSending: true,
      sendingError: null
    });
  });
  it(`returns correctly state when sending reviews was failed`, () => {
    const sendingReviewsFailedAction = {
      type: ActionType.SENDING_REVIEWS_ERROR,
      payload: {
        sendingError: `error`
      }
    };
    expect(reviewsReducer({}, sendingReviewsFailedAction)).toEqual({
      isSending: false,
      sendingError: `error`
    });
  });
});
