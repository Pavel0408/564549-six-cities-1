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
    expect(ActionCreator.fetchOffersReceived(offers)).toEqual({
      type: `FETCH_OFFERS_RECEIVED`,
      payload: {
        offers
      }
    });
  });
  it(`Return correctly action on fetchingOffers`, () => {
    expect(ActionCreator.loadingOffers(true)).toEqual({
      type: ActionType.FETCH_OFFERS_LOADING,
      payload: {
        isLoading: true
      }
    });
  });
  it(`Return correctly action on fetchOffersFailed`, () => {
    expect(ActionCreator.fetchOffersFailed(`error`)).toEqual({
      type: ActionType.FETCH_OFFERS_FAILED,
      payload: {
        error: `error`
      }
    });
  });
});
