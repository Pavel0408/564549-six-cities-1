import {ActionCreator} from "./action-creator";
import {offers} from "./mocks/offers";
import {ActionType} from "./action-type";

describe(`ActionCreator is correct`, () => {
  it(`Return correctly action on city changing`, () => {
    expect(ActionCreator.changeActiveCity(`Brussels`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: {
        cityName: `Brussels`
      }
    });
  });

  it(`Return correctly action on offers changing`, () => {
    expect(ActionCreator.fetchOffersReceived(offers)).toEqual({
      type: ActionType.FETCH_OFFERS_RECEIVED,
      payload: {
        offers
      }
    });
  });
  it(`Return correctly action on fetchingOffers`, () => {
    expect(ActionCreator.loadingOffers(true)).toEqual({
      type: ActionType.FETCH_OFFERS_LOADING
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
  it(`Return correctly action on success authorization`, () => {
    expect(ActionCreator.authorizationSuccess(`user`)).toEqual({
      type: ActionType.AUTHORIZATION_SUCCESS,
      payload: {
        user: `user`
      }
    });
  });
  it(`Return correctly action on authorization failed`, () => {
    expect(ActionCreator.authorizationFailed(`error`)).toEqual({
      type: ActionType.AUTHORIZATION_FAILED,
      payload: {
        user: `error`
      }
    });
  });
  it(`Return correctly action on active offer change`, () => {
    expect(ActionCreator.setActiveOffer(`newOffer`)).toEqual({
      type: ActionType.ACTIVE_OFFER,
      payload: {
        activeOffer: `newOffer`
      }
    });
  });
});
