import {
  authorization, authorizationFailed,
  changeActiveCity,
  fetchOffersFailed,
  fetchOffersReceived,
  loadingOffers, setActiveOffer
} from "./action-creator";
import {ActionType} from "./action-type";

describe(`ActionCreator is correct`, () => {
  it(`Return correctly action on city changing`, () => {
    expect(changeActiveCity(`Brussels`)).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: {
        cityName: `Brussels`
      }
    });
  });

  it(`Return correctly action on offers changing`, () => {
    const offers = [];
    expect(fetchOffersReceived(offers)).toEqual({
      type: ActionType.FETCH_OFFERS_RECEIVED,
      payload: {
        offers: []
      }
    });
  });
  it(`Return correctly action on fetchingOffers`, () => {
    expect(loadingOffers(true)).toEqual({
      type: ActionType.FETCH_OFFERS_LOADING
    });
  });
  it(`Return correctly action on fetchOffersFailed`, () => {
    expect(fetchOffersFailed(`error`)).toEqual({
      type: ActionType.FETCH_OFFERS_FAILED,
      payload: {
        error: `error`
      }
    });
  });
  it(`Return correctly action on success authorization`, () => {
    expect(authorization(`user`)).toEqual({
      type: ActionType.AUTHORIZATION,
      payload: {
        user: `user`
      }
    });
  });
  it(`Return correctly action on authorization failed`, () => {
    expect(authorizationFailed(`error`)).toEqual({
      type: ActionType.AUTHORIZATION_FAILED,
      payload: {
        user: null
      }
    });
  });
  it(`Return correctly action on active offer change`, () => {
    expect(setActiveOffer(`newOffer`)).toEqual({
      type: ActionType.ACTIVE_OFFER,
      payload: {
        activeOffer: `newOffer`
      }
    });
  });
});
