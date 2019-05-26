import {reducer} from './reducer';
import {offers} from "./mocks/offers";

describe(`Reducer is correct`, () => {
  it(`returns initial state without parameters`, () => {
    expect(reducer(undefined, {})).toEqual({
      cityName: `Amsterdam`,
      offers
    });
  });
});
