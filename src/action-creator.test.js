import {ActionCreator} from "./action-creator";
import {offers} from "./mocks/offers";

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
});
