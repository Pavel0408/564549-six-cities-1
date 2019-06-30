import {ActionType} from "../action-type";
import {favoriteReducer} from "./favorite-reducer";

describe(`favoriteReducer is correct`, () => {
  // тест на неподдерживаемый action
  it(`returns correctly state on incorrect action`, () => {
    const successAuthorizationAction = {
      type: ActionType.SENDING_REVIEWS,
      payload: {
        user: `something`
      }
    };
    const state = {
      isLoading: false,
      error: null,
      favoriteOffers: []
    };
    expect(favoriteReducer(state, successAuthorizationAction)).toEqual({
      isLoading: false,
      error: null,
      favoriteOffers: []
    });
  });
  it(`returns initial state without parameters`, () => {
    expect(favoriteReducer(undefined, {})).toEqual({
      isLoading: false,
      error: null,
      favoriteOffers: []
    });
  });
  it(`returns correctly state on favorite loading`, () => {
    const favoriteIsLoadingAction = {
      type: ActionType.FAVORITE_LOADING,
    };

    expect(favoriteReducer({}, favoriteIsLoadingAction)).toEqual({
      isLoading: true,
      error: null
    });
  });
  it(`returns correctly state on favorite received`, () => {
    const favoriteReceivedAction = {
      type: ActionType.FAVORITE_RECEIVED,
      payload: {
        favoriteOffers: `offers`
      }
    };

    expect(favoriteReducer({}, favoriteReceivedAction)).toEqual({
      isLoading: false,
      error: null,
      favoriteOffers: `offers`
    });
  });
  it(`returns correctly state on fetch favorite failed`, () => {
    const favoriteReceivedAction = {
      type: ActionType.FETCH_FAVORITE_FAILED,
      payload: {
        error: `error`
      }
    };

    expect(favoriteReducer({}, favoriteReceivedAction)).toEqual({
      isLoading: false,
      error: `error`
    });
  });
});
