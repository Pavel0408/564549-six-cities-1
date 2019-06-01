import {fetchOffersReducer} from "./fetch-offers-reducer";
import {ActionType} from "../action-type";

describe(`fetchOffersReducer is correct`, () => {
  it(`returns initial state without parameters`, () => {
    expect(fetchOffersReducer(undefined, {})).toEqual({
      isLoading: false,
      isFailed: false,
      isLoaded: false,
      error: null
    });
  });
  it(`correctly change state when offers is loading`, () => {
    const offersLoadingActon = {
      type: ActionType.FETCH_OFFERS,
      payload: {
        isLoading: true,
        isFailed: false,
        isLoaded: false,
        error: null
      }
    };
    expect(fetchOffersReducer({}, offersLoadingActon)).toEqual({
      isLoading: true,
      isFailed: false,
      isLoaded: false,
      error: null
    });
  });
  it(`correctly change state when offers is loaded`, () => {
    const offersLoadedAction = {
      type: ActionType.FETCH_OFFERS_RECEIVED,
      payload: {
        isLoading: false,
        isFailed: false,
        isLoaded: true,
        error: null
      }
    };
    expect(fetchOffersReducer({}, offersLoadedAction)).toEqual({
      isLoading: false,
      isFailed: false,
      isLoaded: true,
      error: null
    });
  });
  it(`correctly change state when offers loaded with error`, () => {
    const offersErrorAction = {
      type: ActionType.FETCH_OFFERS_FAILED,
      payload: {
        isLoading: false,
        isLoaded: false,
        isFailed: true,
        error: `error`
      }
    };
    expect(fetchOffersReducer({}, offersErrorAction)).toEqual({
      isLoading: false,
      isLoaded: false,
      isFailed: true,
      error: `error`
    });
  });
});
