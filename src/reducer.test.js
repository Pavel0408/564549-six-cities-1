import {reducer, ActionCreator} from './reducer';
import {offers} from "./mocks/offers";

describe(`ActionCreator is correct`, () => {
  it(`Return correctly action`, () => {
    expect(ActionCreator.changeActiveCity(`Brussels`)).toEqual({
      type: `CHANGE_CITY`,
      payload: `Brussels`
    });
  });
});

describe(`Reducer is correct`, () => {
  const getCitiesOffers = (offersArr, activeCity) => {
    return offersArr.filter((offer) => offer.city === activeCity);
  };
  const activeCity = `Amsterdam`;
  const activeOffers = getCitiesOffers(offers, activeCity);

  it(`returns initial state without parameters`, () => {
    expect(reducer(undefined, {})).toEqual({
      activeCity: `Amsterdam`,
      activeOffers,
      offers
    });
  });
});
