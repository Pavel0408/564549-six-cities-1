import {ActionCreator} from "./action-creator";
import {offers} from "./mocks/offers";
import {ActionType} from "./action-type";

describe(`ActionCreator is correct`, () => {
  it(`Return correctly action on city changing`, () => {
    expect(ActionCreator.changeActiveCity(`Brussels`)).toEqual({
      type: `CHANGE_CITY`,
      payload: {
        cityName: `Brussels`
      }
    });
  });

  it(`Return correctly action on offers changing`, () => {
    expect(ActionCreator.changeActiveOffers(offers)).toEqual({
      type: `CHANGE_OFFERS`,
      payload: {
        offers
      }
    });
  });
  it(`Return correctly action on fetchOffers`, () => {
    expect(ActionCreator.loadingOffers()).toEqual({
      type: ActionType.FETCH_OFFERS_LOADING,
      payload: {
        isLoading: true
      }
    });
  });
  it(`Return correctly action on fetchOffersReceived`, () => {
    expect(ActionCreator.fetchOffersReceived()).toEqual({
      type: ActionType.FETCH_OFFERS_RECEIVED,
      payload: {
        isLoading: false,
        isFailed: false,
        isLoaded: true,
        error: null
      }
    });
  });
  it(`Return correctly action on fetchOffersFailed`, () => {
    expect(ActionCreator.fetchOffersFailed(`error`)).toEqual({
      type: ActionType.FETCH_OFFERS_FAILED,
      payload: {
        isLoading: false,
        isLoaded: false,
        isFailed: true,
        error: `error`
      }
    });
  });
});
